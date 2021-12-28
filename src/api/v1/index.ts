import { Router } from "express";
import auth from "./auth";
import challenge from "./challenge";
import participation from "./participation";

const router = Router();

router.use("/auth", auth);
router.use("/challenge", challenge);
router.use("/participate", participation);

export default router;
