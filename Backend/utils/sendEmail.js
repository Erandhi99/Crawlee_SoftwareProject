import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";


const sendEmail = async (
   subject,
   send_to,
   sent_from,
   reply_to,
   template,
   name,
   link
) => {
   //create email transporter
   const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
         rejectUnauthorized: false, //only use in development
      },
   });

   //options for template
   const handlebarOptions = {
      viewEngine: {
         extName: ".handlebars",
         partialsDir: path.resolve("./views"),
         defaultLayout: false,
      },
      viewPath: path.resolve("./views"),
      extName: ".handlebars",
   };

   transporter.use("compile", hbs(handlebarOptions));

   //options for sending email
   ///this is an object
   const options = {
      from: sent_from,
      to: send_to,
      replyTo: reply_to,
      subject, //since name and value are same
      template,
      context: {
         name,
         link,
      },
   };

   //send email
   transporter.sendMail(options, function (err, info) {
      if (err) {
         console.log(err);
      } else {
         console.log(info);
      }
   });
};

export default sendEmail;
