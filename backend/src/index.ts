import cors from "cors";
import express, { Request, Response } from "express";

const main = async () => {

    const app = express()
    app.use(express.json()).use(cors()).disable("x-powered-by")

    app.get("/", (req, res) => res.send("OK"))

    app.listen(4000, () => {
        console.log(`Server started at: http://localhost:4000`)
    })
}

main();
