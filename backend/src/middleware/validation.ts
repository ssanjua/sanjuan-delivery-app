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
]