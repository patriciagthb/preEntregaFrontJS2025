/*document.addEventListener("DOMContentLoaded", () => {
    actualizarCarrito()
});
*/
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

    });

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
            <button type ="button">Añadir al carrito<i class="fa-solid fa-cart-shopping"
            style="color: #74C0FC;"></i></button>
            </div>
            `;
            contenedorProductos.appendChild(nuevoProducto);
        })


    });


