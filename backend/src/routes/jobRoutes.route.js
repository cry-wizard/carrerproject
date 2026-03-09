import express from "express";
import Job from '../models/job.js'

const router =express.Router();

// GET all jobs
router.get("/", async (req, res) => {
  try {

    const jobs = await Job.find().sort({ createdAt: -1 });

    res.json(jobs);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching jobs"
    });

  }
});


// GET single job
router.get("/:id", async (req, res) => {
  try {

    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }

    res.json(job);

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }
});

export default router;