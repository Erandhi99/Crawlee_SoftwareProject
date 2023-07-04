import mongoose from "mongoose";
const { Schema } = mongoose;


const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isTeacher: {
      type: Boolean,
      default: false,
    },
    enrolledCourses: [
      {
        courseId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Course',
          required: true,
        },
        progress: {
          type: String,
          default: 0,
        },
        status: {
          type: String,
          default: "Incomplete",
        },
        enrolledAt: {
          type: Date,
          default: Date.now,
        },
        modifiedAt: {
          type: Date,
          default: Date.now,
        },

      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
