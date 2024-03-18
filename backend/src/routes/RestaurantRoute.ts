import express from "express";
import { param } from "express-validator";
import MyRestaurantController from "../controllers/RestaurantController";

const router = express.Router()

// /api/restaurant/search/rivadavia
router.get(
    "/search/:city", 
    param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("la Localidad debe ser string"),
    MyRestaurantController.searchRestaurant
)

export default router