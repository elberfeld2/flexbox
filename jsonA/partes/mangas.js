
const tiempo = (t) =>(new Promise((res,rej)=>setTimeout(()=>{res("Fin")},t) )) 

async function mangas(){
    //DOMpagina
    $codigo = document.getElementById("codigo")
    $pagina = document.getElementById("pagina")
    //Data
    let data = []
    for (let i = 1; i < 75; i++) {
        try {
            $pagina.innerHTML = `Pagina ${i}` 
            api = await import("./../lib/data.js")
            mangas = await api.mangas(""+i)
            console.log(mangas.length)
            data = data.concat(mangas)
            await tiempo(2000)  
        } catch (error) {
            console.log(error)
        }
    }

    const {descargarArchivo} = await import("./../lib/arc.js")
    descargarArchivo(JSON.stringify( data ),"data.json")
}

export function main(){
    mangas()
}