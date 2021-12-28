import { Router } from "express";
import { upload, verifyToken } from "../../../middlewares";
import createChallenge from "./challenge.ctrl/createChallenge";

const router = Router();

router.post("/", verifyToken, upload.single("img"), createChallenge);

export default router;
