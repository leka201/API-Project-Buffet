const Item = require("../models/item");
const { Op } = require('sequelize');

async function create_item(req, res) {
    const { name, decorations, items, food, imagem } = req.body;

    if (decorations === undefined || decorations < 0.00) {
        return res.status(400).json({ message: 'Preço negativo ou não fornecido', itens: null });
    }

    const item = await Item.create({ name, decorations, items, food, imagem });
    
    return res.status(201).json({ message: 'Sucesso', itens: item });
}

async function show_item(req, res) {
    const id = parseInt(req.params.id);

    const item = await Item.findByPk(id);

    if (!item) {
        return res.status(404).json({ message: "Não encontrei" });
    }
    
    return res.status(200).json({
        message: "Achei",
        db: item
    });
}

async function read_item(req, res) {
    const { item } = req.query;

    const condition = {};
    if (item) {
        condition.items = { [Op.like]: `%${items}%` };
    }

    const items = await Item.findAll({
        where: Object.keys(condition).length > 0 ? condition : undefined
    });

    return res.status(200).json({ message: 'Sucesso', db: items });
}

async function up_id(req, res) {
    const id = parseInt(req.params.id);
    const { name, decorations, items, food, imagem } = req.body;

    const item = await Item.findByPk(id);
    if (!item) {
        return res.status(404).json({ message: "Não achei" });
    }
    
    if (decorations !== undefined && decorations < 0.00) {
        return res.status(400).json({ message: "Preço não pode ser negativo" });
    }

    if (name) item.name = name;
    if (decorations !== undefined) item.decorations = decorations;
    if (items) item.items = items;
    if (food) item.food = food;

    await item.save();
    return res.status(200).json({ message: "Atualizado com sucesso", item });
}

async function delete_item(req, res) {
    const id = parseInt(req.params.id)
    const item = await Item.findByPk(id)

    if (!item){
        return res.status(404).json({ message: "Não encontrou" });
    }

    await item.destroy()
    return res.status(203).json({ message: "Deletado" }); 

}

module.exports = {
    create_item,
    up_id,
    delete_item,
    read_item,
    show_item
};
