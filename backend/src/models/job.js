import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },

  company: {
    type: String,
    required: true
  },

  jobType: {
    type: String,
    enum: ["full time", "part time", "contract", "internship"],
    required: true
  },

  category: {
    type: String
  },

  postedDate: {
    type: Date,
    default: Date.now
  },

  overview: {
    type: String
  },

  responsibilities: [
    {
      type: String
    }
  ],

  benefits: [
    {
      type: String
    }
  ],

  compensation: {
    min: Number,
    max: Number
  },

  location: {
    country: String,
    type: String
  },

  minimumExperience: {
    type: String
  },

  totalOpenings: {
    type: Number
  },

  hiringCompany: {
    type: String
  },

  verifiedEmployer: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: true
}
);

const Job = mongoose.model("Job", JobSchema);

export default Job;