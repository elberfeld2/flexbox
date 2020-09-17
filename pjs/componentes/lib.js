export const unir = (array)=>({
    formato:(plantilla) => array.reduce((acc,i)=>acc+plantilla(i),"")
})


export const array = ($doms,i=0,dev=[]) => i==$doms.length ? dev : array($doms,i+1,[...dev,$doms[i]])
export const ocultar = ($d) => $d.style.display = 'none';
export const mostrar = ($d) => $d.style.display = 'block';