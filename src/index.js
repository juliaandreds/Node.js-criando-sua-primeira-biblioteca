import fs from "fs";
import chalk from "chalk";

function extraiLinks (texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]
    const resultados = capturas.map (captura => ({[captura[1]]: [captura[2]]}))
    return resultados
}



function trataErro (erro) {
    throw new Error (chalk.red (erro.code, 'Não há arquivo no diretório'));
}

//async
async function pegaArquivo (caminhoArquivo) {
    try {
        const encoding = "UTF-8";
        const texto = await fs.promises.readFile (caminhoArquivo, encoding) 
        console.log (extraiLinks (texto))
    } catch (erro) {
        trataErro (erro)
    }
}



export default pegaArquivo;
