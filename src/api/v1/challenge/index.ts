import { Router } from "express";
import { upload, verifyToken } from "../../../middlewares";
import createChallenge from "./challenge.ctrl/createChallenge";

const router = Router();

router.post("/", verifyToken, createChallenge);

export default router;
