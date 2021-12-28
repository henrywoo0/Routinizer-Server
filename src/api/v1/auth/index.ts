import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => res.send("It'll be a login function"));

export default router;
