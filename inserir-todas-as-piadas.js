import { openDb, setupDatabase } from "./src/config/database.js";
import { createPiada } from "./src/models/Piada.js";
import piadas from './piadas.json' with { type: 'json'};

const db = await openDb(); 


await db.run(
    'DROP TABLE IF EXISTS piadas'
);

await setupDatabase()

console.log(`iniciando inserção de ${piadas.lengt} piadas...\n`);

for (const [index, piada] of piadas.entries()) {
    try {
        await createPiada(piada.pergunta, piada.resposta);
        process.stdout.write(`\rPiadas inseridas: ${(index + 1).toString().padStart(3)}/${piadas.length}`);
    } catch (error) {
        console.error(`\nErro na piada ${index + 1}:`,error.message);
    }
}

console.log(`\nTodas as 95 piadas foram inseridas com sucesso!`);