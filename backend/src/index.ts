import cors from "cors";
import express, { Request, Response } from "express";
import { v4 } from "uuid";
import prisma from './prisma-client'

const main = async () => {
    const uuid = () => v4()
    const app = express()
    app.use(express.json()).use(cors()).disable("x-powered-by")

    const boat = await prisma.boat.create({
        data: {
            id: uuid(),
            image: 'testImage',
            name: 'speeder1',
            description: '50 km/h speed'
        },
    })

    const allBoats = await prisma.boat.findMany({})

    console.log(allBoats)

    app.get("/", (req, res) => res.send("OK"))

    app.listen(4000, () => {
        console.log(`Server started at: http://localhost:4000`)
    })
}

main();
