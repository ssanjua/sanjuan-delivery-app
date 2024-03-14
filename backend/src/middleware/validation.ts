import { Request , Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    next();
}

export const validateMyUserRequest = [
    body("name")
        .isString()
        .notEmpty()
        .withMessage("el nombre debe ser un string"),
    body("addressLine1")
        .isString()
        .notEmpty()
        .withMessage("la direccion debe ser un string"),
    body("city")
        .isString()
        .notEmpty()
        .withMessage("la ciudad debe ser un string"),
    body("country")
        .isString()
        .notEmpty()
        .withMessage("el país debe ser un string"),
        handleValidationErrors,
];

export const validateMyRestaurantRequest = [
    body("restaurantName")
        .notEmpty()
        .withMessage("El nombre es obligatorio"),
    body("city")
        .notEmpty()
        .withMessage("La Ciudad es obligatoria"),
    body("country")
        .notEmpty()
        .withMessage("El país es obligatorio"),
    body("deliveryPrice")
        .isFloat({min: 0})
        .withMessage("El precio debe ser mayor a cero"),
    body("deliveryPrice")
        .isInt({min: 0})
        .withMessage("El tiempo estimado debe ser mayor a cero"),
    body("deliveryPrice")
        .isArray()
        .withMessage("Debe ser un array")
        .not()
        .isEmpty()
        .withMessage("El array no puede estar vacío"),
    body("menuItems")
        .isArray()
        .withMessage("Debe ser un array"),
    body("menuItems.*.name")
        .notEmpty()
        .withMessage("El item del menú es obligatorio"),
    body("menuItems.*.price")
        .isFloat({min:0})
        .withMessage("El precio debe ser mayor a cero"),
    handleValidationErrors,



]