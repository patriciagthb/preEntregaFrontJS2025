document.addEventListener("DOMContentLoaded", () => {
    // Actualizar contador

    function actualizarContador() {
        const carrito = obtenerCarrito();
        contadorCarrito.textContent = `Carrito (${carrito.length})`;
    }

    const contadorCarrito = document.getElementById('contador');
    actualizarContador();


    //Se llama a la Api dummyJson para traer comentarios y nombres

    reseniasUrl = 'https://dummyjson.com/comments';

    fetch(reseniasUrl)
        .then(response => response.json())
        .then(data => {
            const comentarios = data.comments;
            const contenedorResenias = document.querySelector(".resenias");

            comentarios.forEach(resenia => {
                const nuevoComentario = document.createElement('article');
                nuevoComentario.innerHTML = `

        <p>"${resenia.body}"</p>
        <p>${resenia.user.fullName}</p>
        </article>
        `;
                contenedorResenias.appendChild(nuevoComentario);
            });
        })
        .catch(error => console.log(error));

    // Llamar a la Api mockapi para traer los productos

    productosUrl = 'https://69210338512fb4140bdf2380.mockapi.io/api/productos'
    fetch(productosUrl)
        .then(response => response.json())
        .then(data => {
            const contenedorProductos = document.querySelector(".cards");

            data.forEach(prod => {
                const nuevoProducto = document.createElement('article');
                nuevoProducto.innerHTML = `
            <img src="${prod.imagen}">
            <div class="descripcioncards">
            <p>${prod.nombreProducto}</p>
            <p>$${prod.precio}</p>
            <button class="btn-agregar-carrito" data-id="${prod.id}">Añadir al carrito<i class="fa-solid fa-cart-shopping"
            style="color: #74C0FC;"></i></button>
            </div>
            `;
                contenedorProductos.appendChild(nuevoProducto);
            });
            cargarEventoABotones();
        })
        .catch(error => console.log(error));


    // Obtener carrito actual
    function obtenerCarrito() {
        return JSON.parse(localStorage.getItem('carrito')) || [];
    }

    //Guardar carrito en el storage
    function guardarCarrito(carrito) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }


    // Agregar productos al carrito
    function agregarProductosalCarrito(id) {
        let carrito = obtenerCarrito();
        carrito.push(id);
        guardarCarrito(carrito);
        alert("Producto agregado al carrito");
        actualizarContador();
    }


    // añadir evento a los botones
    function cargarEventoABotones() {
        const botones = document.querySelectorAll('.cards button');
        botones.forEach(boton => {
            boton.addEventListener('click', () => {
                const productoId = boton.getAttribute('data-id');
                agregarProductosalCarrito(productoId);
            });
        });
    }
});


///////////REVISAR!!!!!!////////////////////

///Query string

//const queryString = localStorage.search;
//const stringObj = new URLSearchParams(queryString);
//const id = stringObj.get("id");

//Funcion Agregar al carrito
//function agregarAlCarrrito(id, nombreProducto, imagen, precio) {
//   let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
//
//    const producto = { id, nombreProducto, imagen, precio };
//  carrito.push(producto);

//  localStorage.setItem('carrito', JSON.stringify(carrito));

//  actualizarContadorCarrito();
//}

// Funcion que actualiza el contador del carrito
//function actualizarContadorCarrito() {
//   const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
//  const contadorCarrito = document.getElementById("contador-carrito");
//  contadorCarrito.textContent = carrito.length;
//}

//})
