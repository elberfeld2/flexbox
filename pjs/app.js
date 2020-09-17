
let $mangas,$menus,$menu_item,mangas,api,detalles;

async function mostrar_detalles(id){
    const data = await api.manga(id)
    $detalles = document.getElementById("detalles")  
    console.log(data)
    $detalles.innerHTML = detalles.detalles(data)  
    location.href = "#detalles"
}

async function main(){
    //DOM
    const {mostrar,ocultar,array} = await import("./componentes/lib.js")
    $mangas = document.getElementById("mangas") 
    $menus = array(document.getElementsByClassName("vista"))
    $menu_item = array(document.getElementsByClassName("menu__item"))
    $menus.forEach(i=>ocultar(i))
    mostrar(document.getElementById("inicio"))
    $menu_item.forEach(i=>{
        i.onclick = i=>{
            const id = i.target.dataset.id;
            $menus.forEach(i=>ocultar(i))
            mostrar(document.getElementById(id))
        }
    })

    //Data
    api = await import("./componentes/data.js")
    detalles = await import("./componentes/detalles.js")
    mangas = await api.mangas("1")

    //Vista
    const {cards} = await import("./componentes/cards.js")
    $mangas.innerHTML = cards(mangas)

    mangas = await api.mangas("2")
    $mangas.innerHTML += cards(mangas)
}



main()