import express from "express";
const router = express.Router();
import {
	getProductById,
	getProducts,
	deleteProductById,
	updateProduct,
	createProduct,
	reviewProduct,
	getTopProducts,
} from "../controllers/productControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.get("/top", getTopProducts);
router.route("/:id/reviews").post(protect, reviewProduct);
router
	.route("/:id")
	.get(getProductById)
	.delete(protect, admin, deleteProductById)
	.put(protect, admin, updateProduct);

export default router;
