import { openDb } from '../config/database.js';

export async function getPiadaAleatoria10() {
    const db = await openDb();
    const piada = await db.get(
       `  SELECT id, pergunta, resposta
            FROM piadas WHERE aprovada = 1 ORDER BY RANDOM() LIMIT 10
       ` 
    );

    return piada;
}