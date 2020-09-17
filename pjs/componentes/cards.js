import {unir} from "./lib.js"

const ver = (a)=>{
    console.log(a)
    return ""
}

const autor = (a)=>`
    ${a.name}
`
const card = (manga) => `
            <div class="card" id="m_${manga.mal_id}">
                <h3>${manga.title}</h3>
                <img src="${manga.image_url}" width="50px"/><br>
                <button class="boton" onclick="mostrar_detalles('${manga.mal_id}')">Ver mas</button>
            </div>
`
export const cards = (mangas) => `
        ${unir(mangas).formato(card)}
    `