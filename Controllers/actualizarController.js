import { productServices } from "../productos-servicios.js";
const formulario = document.querySelector("[data-form]");

const obtenerInfo = async() => {
    const url = new URL(window.location)
    const id = url.searchParams.get("id");

    if (id == null) {
        alert("ocurrió un error, intenta de nuevo en unos minutos")
    }

    const nombre = document.querySelector("[data-nombre]")
    const precio = document.querySelector("[data-precio]")
    const producto = await productServices.detalleCliente(id)
    console.log(nombre, "  ", precio)
        nombre.value = producto.nombre;
        precio.value = producto.precio;
};

formulario.addEventListener("submit", ((evento) => {
    evento.preventDefault()
    const url = new URL(window.location)
    const id = url.searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    console.log(nombre, precio);
    productServices.actualizarCliente(nombre, precio, id).then(()=>window.location.href="/Pantallas/productos.html");
}));

obtenerInfo();
