import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router()

router.get(
    "/:restaurantId",
    param("restauranId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("el restaurant debe ser string"),
    RestaurantController.getRestaurant
)

// /api/restaurant/search/rivadavia
router.get(
    "/search/:city", 
    param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("la Localidad debe ser string"),
    RestaurantController.searchRestaurant
)

export default router