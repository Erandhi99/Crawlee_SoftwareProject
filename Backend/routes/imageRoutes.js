import cloudinary from "cloudinary";
import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

router.delete("/:public_id", async (req, res, next) => {
  const { public_id } = req.params;
  try {
    await cloudinary.uploader.destroy(public_id);
    res.status(200).send("Deleted");
  } catch (err) {
    next(err);
  }
});

export default router;
