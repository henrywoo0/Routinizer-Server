import { Router } from "express";
import { upload, verifyToken } from "../../../middlewares";
import createProof from "./proof.ctrl/createProof";

const router = Router();

router.post("/:idx", verifyToken, upload.single("img"), createProof);

export default router;
