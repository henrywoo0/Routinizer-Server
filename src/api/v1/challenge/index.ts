import { Router } from "express";
import { upload, verifyToken } from "../../../middlewares";
import createChallenge from "./challenge.ctrl/createChallenge";
import participateChallenge from "./challenge.ctrl/participateChallenge";

const router = Router();

router.post("/", verifyToken, upload.single("img"), createChallenge);
router.post("/:idx", verifyToken, participateChallenge);

export default router;
