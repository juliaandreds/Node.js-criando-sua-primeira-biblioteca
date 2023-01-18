import fs from "fs";
import chalk from "chalk";

function trataErro (erro) {
    throw new Error (chalk.red (erro.code, 'Não há arquivo no diretório'));
}

//async
async function pegaArquivo (caminhoArquivo) {
    try {
        const encoding = "UTF-8";
        const texto = await fs.promises.readFile (caminhoArquivo, encoding) 
        console.log (chalk.green(texto))
    } catch (erro) {
        trataErro (erro)
    }
}




//async/await
/* function pegaArquivo (caminhoArquivo) {
    const encoding = "UTF-8";
    fs.promises
    .readFile (caminhoArquivo,encoding)
    .then ((texto) => console.log (chalk.green(texto)))
    .catch (trataErro)
*/




pegaArquivo ("./arquivos/texto.md")
pegaArquivo("./arquivos")

