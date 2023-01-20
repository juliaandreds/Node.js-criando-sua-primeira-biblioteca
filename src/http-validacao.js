import chalk from "chalk";

 function extraiLinks (arrLinks) {
   return arrLinks.map((objetoLink) => Object.values (objetoLink).join())
}

async function checaStatus (listaURLs) {
    const arrStatus = await Promise
    .all (
        listaURLs.map (async(url) => {
        try {
            const response = await fetch(url);
            return response.status;

        }   catch (erro) {
            manejaErros (erro);
        } })  
    )
    return arrStatus; 
}

function manejaErros (erro) {
    if (erro.cause.code === 'ENOTFOUND') {
        return 'Link não encontrado'
    }  else {
        return 'Ocorreu algum erro'
    }
}

export default async function listaValidada (listadeLinks) {
    const links =  extraiLinks (listadeLinks);
    const status = await checaStatus (links);

    return listadeLinks.map ((objeto,indice) => ({
        ...objeto,
        status: status[indice]
    })
    )
}

//[gatinho salsicha](http://gatinhosalsicha.com.br/)

