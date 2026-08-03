import express, { type Application, type Request, type Response } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import config from "./config"
import { globalErrorHandler } from "./middleware/globalErrorHandler"
import { routeHandler } from "./middleware/routerHandler"
import { authRoutes } from "./modules/auth/auth.route"

import { userRoutes } from "./modules/users/user.router"
import { categoryRoutes } from "./modules/category/category.router"


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
app.use('/api/categories', categoryRoutes)
app.use('/api/gear', gearRoutes)

app.use(globalErrorHandler)
app.use(routeHandler)

export default app