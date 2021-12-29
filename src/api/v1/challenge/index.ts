import { Router } from "express";
import { verifyToken } from "../../../middlewares";
import createChallenge from "./challenge.ctrl/createChallenge";
import getChallenge from "./challenge.ctrl/getChallenge";
import getExerciseChallenges from "./challenge.ctrl/getExerciseChallenges";
import getHotChallenges from "./challenge.ctrl/getHotChallenges";
import getMyChallenge from "./challenge.ctrl/getMyChallenge";
import getNewChallenges from "./challenge.ctrl/getNewChallenges";

const router = Router();

router.post("/", verifyToken, createChallenge);
router.get("/hot", getHotChallenges);
router.get("/new", getNewChallenges);
router.get("/exercise", getExerciseChallenges);
router.get("/my", verifyToken, getMyChallenge);
router.get("/:idx", getChallenge);

export default router;
