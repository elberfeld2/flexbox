
async function repetidos(){
    const infoFetch = await fetch("./../dataFull.json")
    const info = await infoFetch.json()
    let con = []

    for (let i = 0; i < info.length; i++) {
        const mal_id = info[i].mal_id;
        con[mal_id] = con[mal_id]+1 || 1 

        if(con[mal_id] > 1)
            info[i].mal_id = -1;
    }
    return info.filter(i=>i.mal_id!=(-1))
}

async function guadarFitrados(){
    const infoFiltrada = await repetidos()
    const {descargarArchivo} = await import("./../lib/arc.js")
    descargarArchivo(JSON.stringify( infoFiltrada ),"dataFiltrada.json")
}

export async function main(){
    guadarFitrados()
}