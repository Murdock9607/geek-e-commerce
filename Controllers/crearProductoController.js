import { productServices } from "../productos-servicios.js";


const nuevoProducto = (nombre, precio, id) => {
    const producto = document.createElement("div")
    const contenido = `<div class="producto">
    <img src="../Productos/tazaSW.png" alt="tazaSW" class="producto-imagen">
    <p class="producto-titulo">${nombre}</p>
    <p class="producto-precio">${precio}</p>
    <i class="fa-solid fa-trash borrar" style="color: #4E98DE;" type="button" id="${id}"></i>
    <a href="../Pantallas/editar-producto.html?id=${id}">
        <i class="fa-solid fa-pen-to-square editar" style="color: #4E98DE;"></i>
    </a>

</div>`
    producto.innerHTML = contenido;
    const btn = producto.querySelector("i");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productServices
        .eliminarProducto(id)
        .then((respuesta) => { console.log(respuesta); 
        })
        .catch((err) => alert("Ocurrió un error"));
    });
    // });
    return producto
};

const table = document.querySelector("[data-listaProductos]");

productServices.listaProductos().then((data) => {
    data.forEach((producto) => {
        //console.log(producto);
        const { nombre, precio, id } = producto;
        const nuevaLinea = nuevoProducto(nombre, precio, id);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("ocurrió un error"));