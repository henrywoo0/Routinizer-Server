import { Router } from "express";
import { upload, verifyToken } from "../../../middlewares";
import createParticipation from "./participation.ctrl/createParticipation";
import deleteParticipation from "./participation.ctrl/deleteParticipation";
import getMyParticipations from "./participation.ctrl/getMyParticipations";

const router = Router();

router.get("/", verifyToken, getMyParticipations);
router.post("/:idx", verifyToken, createParticipation);
router.delete("/:idx", verifyToken, deleteParticipation);

export default router;
