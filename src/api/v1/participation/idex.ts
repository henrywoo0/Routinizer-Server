import { Router } from "express";
import { upload, verifyToken } from "../../../middlewares";
import createParticipation from "./participation.ctrl/createParticipation";
import deleteParticipation from "./participation.ctrl/deleteParticipation";

const router = Router();

router.post("/:idx", verifyToken, createParticipation);
router.delete("/:idx", verifyToken, deleteParticipation);

export default router;
