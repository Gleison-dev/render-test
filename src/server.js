import express from "express";

const app = express();
const port = 3333;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "primeiro deploy da galerinha do mal HAHAHAHA"});
});

app.listen(port, () => {
    console.log(`Servidor rodando!`)
});