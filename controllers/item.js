
const Item = require("../models/item");
const { Op } = require('sequelize');


async function create_item(req, res) {
    const { name, price, color, dimension } = req.body;

    if (price < 0.00) {
        return res.status(400).json({ message: 'Preço negativo', itens: null });
    }

    const item = await Item.create({ name, price, color, dimension });
    
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
    const { color } = req.query;

    const condition = {};
    if (color) {
        condition.color = { [Op.like]: `%${color}%` };
    }

    const items = await Item.findAll({
        where: Object.keys(condition).length > 0 ? condition : undefined
    });

    return res.status(200).json({ message: 'Sucesso', db: items });
}






async function up_id(req, res) {
    const id = parseInt(req.params.id);
    const { name, price, color, dimension } = req.body;

    const item = await Item.findByPk(id);
    if (!item) {
        return res.status(404).json({ message: "Não achei" });
    }
    if (price < 0.00) {
        return res.status(400).json({ message: "Preço não pode ser negativo" });
    }

    if (name) item.name = name;
    if (price) item.price = price;
    if (color) item.color = color;
    if (dimension) item.dimension = dimension;

    await item.save();
    return res.status(200).json({ message: "Atualizado com sucesso", item });
}




async function delete_item(req , res) {
    const id = parseInt(req.params.id)
    const item = await Item.findByPk(id);

    if (!item) {
        return res.status(404).json("Não encontrou")

    }
    await item.destroy();
        return res.status(201).json("Deletado")
    }

module.exports = {
    create_item,
    up_id,
    delete_item,
    read_item,
    show_item
};
