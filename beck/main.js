import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();
const port = 8000;

app.use(cors());
app.use(express.json());  

app.listen(8000, () => {
    console.log(`Listening on ${port}`);
  });



app.get("/history", async (req, res) => {
    const history = await prisma.history.findMany({});
    res.json(history);
})

app.post("/history", async (req, res) => {
    const history = await prisma.history.create({
        data: {
            name: req.body.name,
            counts: req.body.counts
        },
    });
    res.json(history);
})

app.delete("/history/:id", async (req, res) => {
    const historyId = req.params.id;
    
    try {
        const history = await prisma.history.delete({
            where: {
                id: historyId,
            },
        });
        res.json(history);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao excluir o histórico." });
    }
});
