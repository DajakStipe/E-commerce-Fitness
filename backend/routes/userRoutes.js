import express from "express";
const router = express.Router();
import {
	authUser,
	registerUser,
	getUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";
router.post("/login", authUser);
router.route("/").post(registerUser);

router.route("/profile").get(protect, getUserProfile);

export default router;
