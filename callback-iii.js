let sites = ['www.trewo.com.br', 'www.globo.com', 'www.dg.com.br','www.google.com']

function adicionarHttp(url){
    return 'http://' + url;
}

function processar(lista, adicionarHttp){
    let sitesHttp = []
    for (let i = 0; i < lista.length; i++){
        sitesHttp.push(adicionarHttp(lista[i]))
    }
    return sitesHttp;
}
console.log(processar(sites, adicionarHttp))