import { productServices } from "../productos-servicios.js";
const form = document.querySelector("[data-form]")

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    console.log(nombre, "  ", precio);
    productServices.crearProductos(nombre, precio).then((respuesta) => {
        window.location.href="/Pantallas/productos.html"
    }).catch((error) => console.log("error"));
});

