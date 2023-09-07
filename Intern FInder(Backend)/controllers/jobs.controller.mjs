import dayjs from "dayjs";
import Job from "../models/jobs.model.mjs";

const createJob = async (req, res, next) => {
  const job = req.body;
  try {
    const response = await Job.create(job);

    res.status(200).json({ response, message: "Job created successfully" });
  } catch (error) {
    next(error);
  }
};

const fethchJob = async (req, res, next) => {
  const { id } = req.params;

  try {
    console.log(req.body);
    const response = await Job.findOne({ key: id });

    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export { createJob, fethchJob };
