
const url = "https://api.jikan.moe/v3/manga"
export const api = async (pagina,opcion="") =>await( await fetch(`${url}/${pagina}${opcion=="" ? "" : "/"+opcion}`) ).json()

export const mangas = async (pagina) =>{
    let mangas = []
    try {
        const data = await api(pagina,"recommendations")
        mangas = data.recommendations    
    } catch (error) {
        console.warn(error)
    }
    return mangas
}

export const manga = async (id) =>{
    let manga = null
    try {
        const data = await api(id)
        manga = data    
    } catch (error) {
        console.warn(error)
    }
    return manga
}
