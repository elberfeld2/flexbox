const tiempo = (t) =>(new Promise((res,rej)=>setTimeout(()=>{res("Fin")},t) )) 

let data = [] , dataErr = []

async function mangasfull(){
    //DOMpagina
    let $pagina = document.getElementById("pagina")
    let $img = document.getElementById("img")

    const infoFetch = await fetch("./../data.json")
    const info = await infoFetch.json()
    console.log(info.length)
    //Data
    data = []
    for (let i = 1; i < 5; i++) {
        try {
            $pagina.innerHTML = `Manga ${i}` 
            let api = await import("./../lib/data.js")
            let manga = await api.manga(info[i].mal_id)
            $img.innerHTML = `<img src="${manga.image_url}" alt="">`
            if(manga!=null)
                data.push(manga)
            await tiempo(1000)  
        } catch (error) {
            dataErr.push({mal_id:info[i].mal_id,i,error})
            console.log(error)
        }
    }
}

async function crearArchivos(){
    const {descargarArchivo} = await import("./../lib/arc.js")
    descargarArchivo(JSON.stringify( data ),"dataFull.json")
    descargarArchivo(JSON.stringify( dataErr ),"dataFullErr.json")
}

export async function main(){
    await mangasfull()
    crearArchivos();
}