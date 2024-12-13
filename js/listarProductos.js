import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-productos]");


export default function crearCard(nombre, precio, imagen) {
    const producto = document.createElement("div");
    producto.className = "col-md-3 mb-3";
    producto.innerHTML = `
    <div class="card card-product">
        <div class="card-body">
            <div class="row">
                <div class="col-md-12">
                    <img src="${imagen}" alt="" class="img-product">
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <p class="title-product">
                        ${nombre}
                    </p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12 btns-actions">
                    <p class="price-product">$${precio}</p>
                    <i class="bi bi-trash"></i>
                </div>
            </div>
        </div>
    </div>
    `;

    // Asignar el evento de eliminación
    const btnEliminar = producto.querySelector(".bi-trash");
    btnEliminar.addEventListener("click", () => eliminarElemento(btnEliminar));

    return producto;
}

function eliminarElemento(elemento) {
    const producto = elemento.closest(".col-md-3");

    producto.remove();
}

async function listarProductos(){
    try{
        const listaAPI = await conexionAPI.listarProductos();
        listaAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre,producto.precio,producto.imagen)));
    }
    catch{
        lista.innerHTML='<h2>Ha ocurrido un error</h2>'
    }
}


listarProductos();