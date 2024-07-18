import express from "express";
import { dashboardShow } from "../controllers/dashBoardController.js";

const dashboardRouter=express.Router();

dashboardRouter.get("/dashboard",dashboardShow);

export default dashboardRouter;