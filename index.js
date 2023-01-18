import fs from "fs";
import chalk from "chalk";

function trataErro (erro) {
    throw new Error (chalk.red (erro.code, 'Não há arquivo no diretório'));
}

function pegaArquivo (caminhoArquivo) {
    const encoding = "UTF-8";
    fs.promises
    .readFile (caminhoArquivo,encoding)
    .then ((texto) => console.log (chalk.green(texto)))
    .catch (trataErro)
}

/* function pegaArquivo (caminhoArquivo) {
    const encoding = "UTF-8";
    fs.readFile(caminhoArquivo, encoding, (erro, texto)  => {
        if (erro ) {
            trataErro (erro);
        }
        console.log (chalk.green(texto));
    }) */



pegaArquivo ("./arquivos/texto.md")


