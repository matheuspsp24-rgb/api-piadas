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

