const Item = require("../models/item");

async function create_item(name, price, color, dimension, res) {
    if (price < 0.00) {
        return res.status(400).json({ message: 'Preço negativo', itens: null });
    }

    const item = await Item.create({ name, price, color, dimension });
    return res.status(200).json({ message: 'Sucesso', itens: item });
}

async function read_item() {
    return await Item.findAll();
}

async function up_id(id, name, price, color, dimension,res) {
    const item = await Item.findByPk(id);
    if (!item) {
        return { status: 404, msg: "Não achei" };
    }
    if (price < 0.00) {
        return { status: 400, msg: "Preço não pode ser negativo" };
    }

    if (name) item.name = name;
    if (price) item.price = price;
    if (color) item.color = color;
    if (dimension) item.dimension = dimension;

    await item.save();
    return { status: 200, msg: item };
}

async function delete_item(id) {
    const item = await Item.findByPk(id);

    if (!item) {
        return false;
    }
    await item.destroy();
    return true;
}

module.exports = {
    create_item,
    up_id,
    delete_item,
    read_item
};
