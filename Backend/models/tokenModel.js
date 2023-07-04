import mongoose from "mongoose";

const tokenSchema = mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
   },
   rToken: {
      type: String,
      default: "",
   },
   createdAt: {
      type: Date,
      required: true,
   },
   expiresAt: {
      type: Date,
      required: true,
   },
});

export default mongoose.model("Token", tokenSchema);
