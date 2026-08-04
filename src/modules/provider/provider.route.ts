import { Router } from "express";
import auth from "../../middleware/auth";
import { Role } from "../../../generated/prisma/enums";
import { providerController } from "./provider.controller";
import validateRequest from "../../middleware/validateRequest";
import { createGearSchema, updateGearSchema, updateRentalStatusSchema } from "../../validations/requestSchema";

const router = Router()

router.post('/gear', auth(Role.PROVIDER), validateRequest(createGearSchema), providerController.addGear)
router.get('/gear', auth(Role.PROVIDER), providerController.getGearList)
router.put('/gear/:id', auth(Role.PROVIDER), validateRequest(updateGearSchema), providerController.updateGear)
router.delete('/gear/:id', auth(Role.PROVIDER), providerController.deleteGear)
router.get('/orders', auth(Role.PROVIDER), providerController.getOrders)
router.patch('/orders/:id', auth(Role.PROVIDER), validateRequest(updateRentalStatusSchema), providerController.updateOrderStatus)

export const providerRoutes = router