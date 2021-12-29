import { Router } from "express";
import { upload, verifyToken } from "../../../middlewares";
import createChallenge from "./challenge.ctrl/createChallenge";
import getChallenge from "./challenge.ctrl/getChallenge";
import getExerciseChallenges from "./challenge.ctrl/getExerciseChallenges";
import getHotChallenges from "./challenge.ctrl/getHotChallenges";
import getNewChallenges from "./challenge.ctrl/getNewChallenges";

const router = Router();

router.post("/", verifyToken, createChallenge);
router.get("/hot", getHotChallenges);
router.get("/new", getNewChallenges);
router.get("/exercise", getExerciseChallenges);
router.get("/:idx", getChallenge);

export default router;
