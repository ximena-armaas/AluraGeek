async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}


async function crearProducto(nombre,precio,imagen){
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })

    const conexionConvertida = conexion.json();
    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }
    return conexionConvertida;
}

export const conexionAPI = {
    listarProductos,
    crearProducto
}