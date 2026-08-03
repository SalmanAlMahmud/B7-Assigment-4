
import { prisma } from "../../lib/prisma"
import type { ICreateCategory } from "./interface"

const getAllCategoriesFromDB = async () => {
    const categories = await prisma.category.findMany({
        orderBy: { name: "asc" },
        include: {
            _count: {
                select: { gearItems: true }
            }
        }
    })
    return categories
}

const insertCategoryIntoDB = async (payload: ICreateCategory) => {
    const result = await prisma.category.create({
        data: payload
    })
    return result
}
export const categoryServices = {
    getAllCategoriesFromDB,
    insertCategoryIntoDB
}