const filtering = lista => {    
    let objResult = new Object();
    objResult.asc = lista.slice(0).sort((a,b) => a-b);
    objResult.desc = lista.slice(0).sort((a,b) => b-a);

    return objResult;

    // return {
    //     asc: lista.slice(0).sort((a,b) => a-b),
    //     desc: lista.slice(0).sort((b,a) => a-b)
    // }
}

const duplicates = lista => {    
    for(let indice = 0; indice < lista.length; indice++){
        for(let indicador = indice+1; indicador < lista.length; indicador++)
            if(lista[indice] === lista[indicador]) lista.splice(indicador, 1);            
    }
    return lista;    
}

const promedio = listaCalificaciones => {
    let reductor = (acumulador, valorActual ) => acumulador + valorActual;
    return listaCalificaciones.reduce(reductor)/listaCalificaciones.length;
}

// console.log(duplicates(["x", 10, "x", 2, "10", 10, true, true]));
// console.log(duplicates([2.5, 1, "hola", 2.5, "3", "hola", {}, 1]));
//console.log(promedio([9,8,7,6,5,4,3,2,1,0]));
//console.log(filtering([7, 5, 7, 8, 6]));
//filtering([7, 5, 7, 8, 6])
