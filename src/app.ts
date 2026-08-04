import express, { type Application, type Request, type Response } from "express"
import cookieParser from "cookie-parser"
import { globalErrorHandler } from "./middleware/globalErrorHandler"
import { routeHandler } from "./middleware/routerHandler"
import { authRoutes } from "./modules/auth/auth.route"

import { userRoutes } from "./modules/users/user.router"
import { categoryRoutes } from "./modules/category/category.router"
import { gearRoutes } from "./modules/gear/gear.route"
import { rentalRoutes } from "./modules/rental/rental.route"
import { providerRoutes } from "./modules/provider/provider.route"
import { adminRoutes } from "./modules/admin/admin.router"
import { reviewRoutes } from "./modules/review/review.route"
import { paymentRoutes } from "./modules/payment/payment.route"


const app : Application = express()



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', async (req: Request, res: Response) => {
    res.json({
        message : "GearUp server is running",
        
    })
    
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/categories', categoryRoutes),
app.use('/api/gear', gearRoutes)
app.use('/api/provider/', providerRoutes)
app.use('/api/rentals/', rentalRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/admin', adminRoutes)

app.use(globalErrorHandler)
app.use(routeHandler)

export default app