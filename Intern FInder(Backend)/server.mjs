import dotenv from "dotenv";
dotenv.config();
import dayjs from "dayjs";
import bodyParser from "body-parser";

import { connectDB } from "./config/db.config.mjs";
import authenticate from "./middleware/authenticate.mjs";
import errorHandler from "./middleware/errorHandler.mjs";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import router_jobs from "./routes/jobs.router.mjs";
import router_search from "./routes/search.router.mjs";
import router_user from "./routes/user.router.mjs";
import router_auth from "./routes/auth.router.mjs";

const app = express();

//middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // replace with the URL of your client
    credentials: true,
  })
); //cross orgin resource sharing for giving access to our api

const { json, urlencoded } = express;

app.use(morgan("dev"));

app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(cookieParser());
app.use(urlencoded({ extended: true }));

// authenticate the using middleware and cookie befor use uncomment

app.use("/api/auth", router_auth);

app.use(authenticate);
app.get("/api/authenticate", (req, res, next) => {
  res.status(200).json({ message: "Authenticated" });
  next();
});

app.use("/api/user", router_user);
app.use("/api/jobs", router_jobs);
app.use("/api/search", router_search);
app.use(errorHandler);

// cron.schedule("0 12 * * *", scheduleShuttle);

const startServer = async () => {
  try {
    app.listen(8070, () => {
      connectDB();
      console.log("Server started on port http://localhost:8070");
    });
  } catch (err) {
    console.log(err);
  }
};

export { startServer };
