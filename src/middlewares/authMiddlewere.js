import jwt from 'jsonwebtoken';

export default function authMiddlewere(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Token não fornecido.' });
    }

    const parts = authorization.split(' ');

    if (parts.length !== 2) {
        return res.status(401).json({ message: 'Erro no formato do token.' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ message: 'Token mal formatado.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido.' });
        }

        req.userId = decoded.id;
        return next();
    });
}
