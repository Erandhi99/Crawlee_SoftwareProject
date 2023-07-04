import mongoose from "mongoose";
const { Schema } = mongoose;

const CourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    required: true,
  },
  
  courseCategory: {
    type: String,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  instructorName: {
    type: String,
    required: true,
  },
  courseCover: {
    type: Array,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  suspended: {
    type: Boolean,
    default: false,
  },
  lessons: [{
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    material: {
      type: Array,
    },
  }],
},{timestamps: true});

export default mongoose.model("Course", CourseSchema);
