const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const crearProductos = (nombre, precio) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({
            nombre, precio, id: uuid.v4()
        }),
        // }).then(respuesta => {
        //     if (respuesta.ok) {
        //         return respuesta.body
        //     }
        // })
        // throw new Error("no se pudo crear el producto")
    });
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE",
    });
}

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => respuesta.json());
}

const actualizarCliente = (nombre, precio, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, precio}),
    }).then((respuesta) => console.log(respuesta))
        .catch((err) => console.log(err));
}

export const productServices = {
    listaProductos, crearProductos, eliminarProducto, detalleCliente, actualizarCliente,
};