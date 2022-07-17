import cors from "cors";
import express, { Request, Response } from "express";
import { v4 } from "uuid";
import prisma from './prisma-client'

const main = async () => {
    const uuid = () => v4()
    const app = express()
    app.use(express.json()).use(cors()).disable("x-powered-by")

    const allBoats = await prisma.boat.findMany({})

    console.log(allBoats)

    app.get("/getAllBoats", async (req: Request, res: Response) => {
        const boats = await prisma.boat.findMany();
        res.json(boats);
    });

    app.post("/", async (req: Request, res: Response) => {
        const { id, image, name, description } = req.body;
        const boat = await prisma.boat.create({
            data: {
                id: uuid(),
                image: image,
                name: name,
                description: description
            },
        });
        res.json(boat);
    });

    app.get("/:id", async (req: Request, res: Response) => {
        const id = req.params.id
        const boat = await prisma.boat.findUnique({
            where: {
                id: id,
            }
        }
        );
        res.json(boat);
    });

    app.put("/", async (req: Request, res: Response) => {
        const { id, image, name, description } = req.body;
        const updatedBoat = await prisma.boat.update({
            where: {
                id: id,
            },
            data: {
                image: image,
                name: name,
                description: description
            },
        });
        res.json(updatedBoat);
    });

    app.delete("/:id", async (req: Request, res: Response) => {
        const id = req.params.id
        const deletedBoat = await prisma.boat.delete({
            where: {
                id: id,
            },
        });
        res.json(deletedBoat);
    });

    app.get("/", (req, res) => res.send("OK"))

    app.listen(4000, () => {
        console.log(`Server started at: http://localhost:4000`)
    })
}

main();
