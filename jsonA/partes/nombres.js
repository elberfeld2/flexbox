
const nombresMinusculas = (nombres = [])=> nombres.map(n=>n.toLowerCase())

async function nombres(){
    const infoFetch = await fetch("./../dataFiltrada.json")
    const infoFiltrada = await infoFetch.json()
    
    let infoNombres = []

    for (let i = 0; i < infoFiltrada.length; i++) {
        const element = infoFiltrada[i];
        
        let nombres = [];

        if(element.title_english)
            nombres.push(element.title_english)
        if(element.title_japanese)
            nombres.push(element.title_japanese)
        if(element.title_english)
            nombres.push(...element.title_synonyms)

        nombres = nombresMinusculas(nombres)


        if(nombres.length > 1){
            infoNombres.push({nombres,mal_id:element.mal_id})
        }
        else if(nombres.length == 1){
            if(/[A-Z]/gi.test(nombres[0]))
                infoNombres.push({nombres,mal_id:element.mal_id})
            else
                console.log(nombres);                
        }


    }
    
    console.log(infoNombres);
    

    return infoNombres
}

async function nombreFitrados(){
    const infoFiltrada = await nombres()
    const {descargarArchivo} = await import("./../lib/arc.js")
    descargarArchivo(JSON.stringify( infoFiltrada ),"nombres.json")
}

async function revisar(){
    
    const infoFetch = await fetch("./../nombres.json")
    let infoFiltrada = await infoFetch.json()
    infoFiltrada = infoFiltrada.map(info =>({
        ...info,
        nombres:info.nombres.reduce((acc=[],i)=>acc.find(a=>a==i) ? acc : [...acc,i],[])
    }))

    const $info = document.getElementById("info")
    console.log(infoFiltrada)
    $info.innerHTML = infoFiltrada.reduce((acc,i)=>acc+`
        <h4>Anime ${i.mal_id}</h4>
        ${i.nombres.reduce((acc,i)=>acc+`<p class="nombre">${i}</p>`)}   
        <br>
    `,"")
}
export async function main(){
//    nombreFitrados()
    revisar()
}