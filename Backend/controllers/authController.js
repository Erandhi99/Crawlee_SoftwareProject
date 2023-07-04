import User from "../models/User.js";
import Token from "../models/tokenModel.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import validator from "validator";
import sendEmail from "../utils/sendEmail.js";

import crypto from "crypto";

export const signup = async (req, res, next) => {
   try {
      const { username, email, password } = req.body;

      //validation
      if (!username || !email || !password) {
         return next(
            createError(400, "Please fill in all the required fields.")
         );
      }

      //check whether the email is a valid one
      if (!validator.isEmail(email)) {
         return next(createError(400, "Email is not valid"));
      }

      //check whether the password is strong enough
      if (!validator.isStrongPassword(password)) {
         return next(createError(400, "Password not strong enough"));
      }

      //check if user exists
      const userEmailExists = await User.findOne({ email });
      const userNameExists = await User.findOne({ username });

      if (userEmailExists) {
         return next(createError(400, "Email already in use."));
      }
      if (userNameExists) {
         return next(createError(400, "Name already in use."));
      }

      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);

      const user = await User.create({
         username,
         email,
         password: hashedPassword,
         enrolledCourses: [],
      });

      const token = jwt.sign(
         {
            id: user._id,
            isAdmin: user.isAdmin,
            isTeacher: user.isTeacher,
         },
         process.env.JWT_SECRET,
         { expiresIn: "1d" }
      );

      if (user) {
         const { password, isAdmin, isTeacher,...otherDetails } = user._doc;

         res.status(201).json({
            ...otherDetails, isAdmin, isTeacher
         });
         // Set the cookie only if signup was successful
         res.cookie("access_token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400),
            sameSite: false,
            secure: true,
         });
      } else {
         return next(createError(400, "Invalid user data"));
      }
   } catch (err) {
      next(err);
   }
};

export const login = async (req, res, next) => {
   try {
      const { email, password } = req.body;

      if (!email || !password) {
         return next(createError(400, "Please add email and password."));
      }

      const user = await User.findOne({ email });

      if (!user) {
         return next(createError(404, "User not found"));
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
         return next(createError(400, "Incorrect password"));
      }

      const token = jwt.sign(
         { id: user._id, isAdmin: user.isAdmin, isTeacher: user.isTeacher },
         process.env.JWT_SECRET
      );

      if (user && isPasswordCorrect) {
         res.cookie("access_token", token, {
            path: "/", // cookie is valid for all paths
            httpOnly: true, //inaccessible to client-side scripts, helping to prevent cross-site scripting (XSS) attacks
            expires: new Date(Date.now() + 1000 * 86400), //1day
            sameSite: false, //cookie can be sent with cross-site requests
            secure: true, //make this false if not working- not recommended for production environment
         });

         const { password, isAdmin, isTeacher,...otherDetails } = user._doc;

         res.status(201).json({
            ...otherDetails, isAdmin, isTeacher
         });
      } else {
         return next(createError(500, "Something is wrong, please try again"));
      }
   } catch (err) {
      next(err);
   }
};

//logout user
export const logoutUser = async (req, res, next) => {
   try {
      //sending an empty string and expire already existing token
      res.cookie("access_token", "", {
         path: "/",
         httpOnly: true,
         expires: new Date(0), //to logout --> expire the cookie
         sameSite: false,
         secure: true, //make this false if not working
      });

      return res.status(200).json({ message: "Logout successfull" });
   } catch (err) {
      next(err);
   }
};

// Forgot Password
export const forgotPassword = async (req, res, next) => {
   try {
      const { email } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
         return next(createError(404, "No user with this email"));
      }

      // Delete Token if it exists in DB
      let token = await Token.findOne({ userId: user._id });
      if (token) {
         await token.deleteOne();
      }

      //   Create Verification Token and Save
      const resetToken = crypto.randomBytes(32).toString("hex") + user._id;
      console.log(resetToken);

      // Hash token and save
      const hashedToken = crypto.createHash("sha256").update(resetToken.toString()).digest("hex");

      await new Token({
         userId: user._id,
         rToken: hashedToken,
         createdAt: Date.now(),
         expiresAt: Date.now() + 60 * (60 * 1000), // 60mins
      }).save();

      // Construct Reset URL
      const resetUrl = `${process.env.FRONTEND_URL}/resetPassword/${resetToken}`;

      // Send Email
      const subject = "Password Reset Request - Crawlee";
      const send_to = user.email;
      const sent_from = process.env.EMAIL_USER;
      const reply_to = "";
      const template = "forgotPassword";
      const name = user.name;
      const link = resetUrl;

      try {
         await sendEmail(
            subject,
            send_to,
            sent_from,
            reply_to,
            template,
            name,
            link
         );

         res.status(200).json({ message: "Password Reset Email Sent" });
      } catch (error) {
         return next(createError(500, "Email not sent, please try again"));
      }
   } catch (err) {
      next(err);
   }
};

// Reset Password
export const resetPassword =async (req, res, next) => {
   try{
   const { resetToken } = req.params;
   const { password } = req.body;
   // console.log(resetToken);
   // console.log(password);

   const hashedToken =crypto.createHash("sha256").update(resetToken.toString()).digest("hex");

   const userToken = await Token.findOne({
      rToken: hashedToken,
      expiresAt: { $gt: Date.now() },
   });

   if (!userToken) {
      return next(createError(404, "Invalid or Expired Token"));
   }

   // Find User
   const user = await User.findOne({ _id: userToken.userId });

   const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

   // Now Reset password
   user.password = hashedPassword;
   await user.save();

   res.status(200).json({ message: "Password Reset Successful, please login" });
} catch (err) {
   next(err);
}
}
