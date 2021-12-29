import { Router } from "express";
import { upload, verifyToken } from "../../../middlewares";
import getGradeRanking from "./auth.ctrl/getGradeRanking";
import getRanking from "./auth.ctrl/getRanking";
import join from "./auth.ctrl/join";
import login from "./auth.ctrl/login";

const router = Router();

router.post("/join", join);
router.post("/login", login);
router.get("/ranking", getRanking);
router.get("/ranking/grade", verifyToken, getGradeRanking);

export default router;
