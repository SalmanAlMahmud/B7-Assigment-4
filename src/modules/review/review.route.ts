import { Router } from "express";
import { reviewController } from "./review.controller";
import auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";

import { Role } from "../../../generated/prisma/enums";
import { createReviewSchema } from "../../validations/requestSchema";

const router = Router()

router.post('/', auth(Role.CUSTOMER), validateRequest(createReviewSchema), reviewController.createReview)

export const reviewRoutes = router