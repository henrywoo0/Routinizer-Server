import { Router } from "express";
import { upload, verifyToken } from "../../../middlewares";
import createProof from "./proof.ctrl/createProof";

const router = Router();

router.post("/:idx", verifyToken, createProof);

export default router;
