import { Router } from "express";
import auth from "../../middleware/auth";

import { userController } from "./user.controller";
import { Role } from "../../../generated/prisma/enums";


const router  = Router()

router.put('/update-profile', auth(Role.CUSTOMER, Role.PROVIDER, Role.ADMIN), userController.updateMyProfile)

export const userRoutes = router