"use server"

import { db } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

export async function getCurrentBudget(accountId) {
    try {
        const {userId} = await auth()
        if(!userId) throw new Error("Unauthorized")

        const user = await db.user.findUnique({
            where:{
                clerkUserId: userId
            }
        })

        if(!user) throw new Error("User not found")  

        const budget = await db.budget.findUnique({
            where: {
                userId: user.id,
            },
        })
        
        const currentDate = new Date()
        const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() -1, 1) // for testing only 
        //const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() -1, 1)
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

        const expenses = await db.transaction.aggregate({
            where: {
                userId: user.id,
                type: "EXPENSE",
                date: {
                    gte: startOfMonth,
                    lte: endOfMonth,
                },
                accountId
            },
            _sum: {
                amount: true
            }
        })
        
        // console.log(expenses)

        return {
            budget: budget ? { ...budget, amount: budget.amount.toNumber() } : null,
            currentExpenses: expenses._sum.amount
              ? expenses._sum.amount.toNumber()
              : 0
        }

    } catch (error) {
        console.log("Error fetching budget",error)
        throw error
    }
}


export async function updateBudget(amount) {
    try {
        const {userId} = await auth()
        if(!userId) throw new Error("Unauthorized")

        const user = await db.user.findUnique({
            where:{
                clerkUserId: userId
            }
        })

        if(!user) throw new Error("User not found")   
            
        const budget = await db.budget.upsert({
            where: {
                userId: user.id,
            },
            create: {
                userId: user.id,
                amount: amount,
            },
            update: {
                amount: amount,
            },
        })

        revalidatePath("/dashboard")

        return {
            success:true,
            data: { ...budget , amount: budget.amount.toNumber() }
        }
    } catch (error) {
        console.log("Error updating budget",error)
        return {
            success: false,
            error: error.message
        }
    }
}
    