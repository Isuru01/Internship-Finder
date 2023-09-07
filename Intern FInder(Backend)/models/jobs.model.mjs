import { Schema, SchemaType, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const JobSchema = new Schema({
  key: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  location: {
    type: String,
  },
  field: {
    type: String,
  },
  company: {
    type: String,
    required: true,
  },
  companyImg: {
    type: String,
  },
  link: {
    type: String,
  },
  tags: [{ type: String }],
  body: {
    type: String,
  },
});

JobSchema.pre("save", function (next) {
  if (!this.key) {
    this.key = uuidv4();
  }

  if (!this.createdAt) {
    this.createdAt = dayjs().format();
  }
  next();
});

const JobModel = model("Job", JobSchema);
export default JobModel;
