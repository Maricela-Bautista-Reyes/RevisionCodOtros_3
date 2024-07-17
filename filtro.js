// Arreglo de productos
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./img/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./img/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./img/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./img/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./img/zapato-rojo.jpg" }
];

// Elementos del DOM
const listaProductos = document.getElementById("lista-de-productos");
const inputTexto = document.querySelector('.input');
const botonFiltrar = document.getElementById("boton-filtrar");

// Función para mostrar todos los productos
function mostrarProductos(productos) {
  listaProductos.innerHTML = '';
  productos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");
  
    const parrafoTitulo = document.createElement("p");
    parrafoTitulo.classList.add("titulo");
    parrafoTitulo.textContent = producto.nombre;
  
    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);
  
    divProducto.appendChild(parrafoTitulo);
    divProducto.appendChild(imagen);
  
    listaProductos.appendChild(divProducto);
  });
}

// Función para filtrar productos
function filtrarProductos() {
  const texto = inputTexto.value.toLowerCase();
  const productosFiltrados = productos.filter(producto =>
    producto.tipo.includes(texto) || producto.color.includes(texto)
  );
  mostrarProductos(productosFiltrados);
}

// Evento click del botón Filtrar
botonFiltrar.addEventListener("click", filtrarProductos);

// Mostrar todos los productos al cargar la página
mostrarProductos(productos);
