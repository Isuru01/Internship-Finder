import { Router } from "express";
import { createJob, fethchJob } from "../controllers/jobs.controller.mjs";

const router = Router();

router.route("/").get().post(createJob);
router.route("/:id").get(fethchJob);

export default router;
