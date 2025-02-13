const { AsyncLocalStorage } = require('async_hooks');
const User = require('../models/user');
const { op, where } = require('sequelize');

async function create_users(req, res) {
    const { login, password, cep, email, born, gender } = req.body;

    if (!login || !password || !email || !cep || !born || !gender) {
        return res.status(400).json({ message: 'Campos obrigatórios não preenchidos' });
    }

    if (password.length < 8) {
        return res.status(400).json({ message: 'A senha deve ter pelo menos 8 caracteres' });
    }

    if (cep.length !== 8) {
        return res.status(400).json({ message: 'O CEP deve conter exatamente 8 caracteres' });
    }

    if (!email.includes('@')) {
        return res.status(400).json({ message: 'O e-mail deve conter um "@"' });
    }

    if (age(born) < 18) {
        return res.status(400).json({ message: 'A idade mínima é 18 anos' });
    }

    if (!['masculino', 'feminino', 'outro'].includes(gender.toLowerCase())) {
        return res.status(400).json({
            message: 'Gênero inválido. Escolha entre "masculino", "feminino" ou "outro".'
        });
    }

    // Verificando se o e-mail já está cadastrado
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
        return res.status(400).json({ message: 'O e-mail já está em uso' });
    }

    // Verificando se o login já está cadastrado
    const existingLogin = await User.findOne({ where: { login } });
    if (existingLogin) {
        return res.status(400).json({ message: 'O nome de usuário já está em uso' });
    }

    // Criando o novo usuário
    const user = await User.create({ login, password, cep, email, born, gender });

    return res.status(201).json({
        message: 'Usuário criado com sucesso',
        user: user
    });
}

function age(date) {
    const birthdate = new Date(date);
    const today = new Date();

    let age = today.getFullYear() - birthdate.getFullYear();

    if (birthdate.getDate() >= today.getDate() && birthdate.getMonth() >= today.getMonth()) age--;

    return age;
}

async function show_user(req, res) {
    const id = parseInt(req.params.id);

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({
            message: "Usuário não encontrado"
        });
    }

    return res.status(202).json({
        message: "Usuário encontrado",
        user: user
    });
}

async function read_users(req, res) {
    const { login } = req.query;

    const condition = {};

    if (login) {
        condition.login = { [op.like]: `%${login}%` };
    }

    const users = await User.findAll({
        where: Object.keys(condition).length > 0 ? condition : undefined
    });

    return res.status(200).json({
        message: 'Usuários encontrados',
        users: users
    });
}

async function update_user(req, res) {
    const id = parseInt(req.params.id);
    const { login, password } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    if (login) user.login = login;
    if (password) user.password = password;

    // Salvar no banco de dados
    await user.save();

    return res.status(200).json({ message: "Usuário atualizado com sucesso", user: user });
}

async function delete_user(req, res) {
    const id = parseInt(req.params.id);

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Deletar o usuário
    await user.destroy();

    return res.status(200).json({ message: "Usuário deletado com sucesso" });
}

module.exports = { create_users, update_user, delete_user, read_users, show_user };
