import { Router } from "express";
import auth from "../../middleware/auth";
import { Role } from "../../../generated/prisma/enums";
import { rentalController } from "./rental.controller";
import validateRequest from "../../middleware/validateRequest";
import { createRentalSchema } from "../../validations/requestSchema";

const router = Router()

router.post('/', auth(Role.CUSTOMER), validateRequest(createRentalSchema), rentalController.createRental)
router.get('/', auth(Role.CUSTOMER), rentalController.getMyRentals)
router.get('/:id', auth(Role.CUSTOMER), rentalController.getRentalById)
router.patch('/:id/cancel', auth(Role.CUSTOMER), rentalController.cancelRental)

export const rentalRoutes = router