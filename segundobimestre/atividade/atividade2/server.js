
const express = require("express");
const cors = require("cors");

const app = express();
const PORTA = 3000;

app.use(cors());
app.use(express.json());

const produtos = [
    { id: 1, nome: "Teclado", preco: 120.00 },
    { id: 2, nome: "Mouse", preco: 65.90 },
    { id: 3, nome: "Monitor", preco: 899.90 }
];

// Listar todos os produtos
app.get("/api/produtos", (req, res) => {
    res.status(200).json(produtos);
});

// Cadastrar produto
app.post("/api/produtos", (req, res) => {
    const novoProduto = req.body;

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});

// Consultar produto pelo ID
app.get("/api/produtos/:id", (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.status(200).json(produto);
});

// Atualizar produto
app.put("/api/produtos/:id", (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    const { nome, preco } = req.body;

    if (
        typeof nome !== "string" ||
        !nome.trim() ||
        typeof preco !== "number" ||
        !Number.isFinite(preco) ||
        preco < 0
    ) {
        return res.status(400).json({
            mensagem: "Nome ou preço inválido"
        });
    }

    produto.nome = nome;
    produto.preco = preco;

    res.status(200).json(produto);
});

// Excluir produto
app.delete("/api/produtos/:id", (req, res) => {
    const id = Number(req.params.id);

    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produtos.splice(indice, 1);

    res.status(200).json({
        mensagem: "Produto excluído com sucesso"
    });
});

// Iniciar servidor
app.listen(PORTA, () => {
    console.log(`Servidor executando na porta ${PORTA}`);
});
