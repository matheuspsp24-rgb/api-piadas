import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as Usuario from '../models/Usuario.js';

export async function registraUsuario(req, res) {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: 'Email e senha são obrigatorios.' });
    }

    const senhaHash = await bcrypt.hash(senha,10);

    try {
        const novoUsuario = await Usuario.createUser(email, senhaHash);
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: novoUsuario });
    } catch (error) {
        res.status(400).json({ message: 'Error ao cadastra.Esse email já existe?' });
    }
}

export async function login(req, res) {
    const { email, senha } = req.body;

    const usuario = await Usuario.findUserByEmail(email);

    if (!usuario) {
        return res.status(401).json({ message: 'Creadenciais inválidas.'});
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
        return res.status(401).json({ message: 'Credenciais inválidas.'});
    }

    const token = jwt.sign(
        { id: usuario.id},
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.json({ token });
}

