import express from "express";
import {
  addCategory,
  getCategory,
  getCategoryById,
} from "../controllers/categoryController.js";
import {
  addHouse,
  getHouse,
  getHouseById,
} from "../controllers/houseController.js";

const router = express.Router();

router.get("/categories", getCategory);
router.get("/categories/:id", getCategoryById);
router.post("/categories/", addCategory);

router.get("/houses", getHouse);
router.get("/houses/:id", getHouseById);
router.post("/houses/", addHouse);

export default router;
