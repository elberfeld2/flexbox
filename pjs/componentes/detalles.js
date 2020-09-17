const ver = (a)=>{
    console.log(a)
    return ""
}

const alternativos = (nombres = []) => nombres.length !== 0 ? `
            <h5>Titulos Alternativos : ${nombres.join(",")}</h5>
        `:""

export const detalles = (manga) => `
        <img src="${manga.image_url}" class="doble__img"/>
        <div class="doble__main">
            <h3>${manga.title}</h3>
            <p class="doble__texto">${manga.background}</p>
            <h5>Titulo : ${manga.title}</h5>
            <h5>Ingles : ${manga.title_synonyms} , Japones : ${manga.title_japanese}</h5>
            ${alternativos(manga.title_synonyms)}  
            <br>
            <a href="#m_${manga.mal_id}" class="doble__regresar" >Regresar</a>
        </div>
    `