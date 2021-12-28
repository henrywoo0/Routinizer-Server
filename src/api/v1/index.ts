import { Router } from "express";
import auth from "./auth";
import challenge from "./challenge";

const router = Router();

router.use("/auth", auth);
router.use("/challenge", challenge);

export default router;
