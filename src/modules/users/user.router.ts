import { Router } from "express";
import auth from "../../middleware/auth";
import { Role } from "../../../prisma/generated/prisma/client";
import { userController } from "./user.controller";


const router  = Router()

router.put('/update-profile', auth(Role.CUSTOMER, Role.PROVIDER, Role.ADMIN), userController.updateMyProfile)

export const userRoutes = router