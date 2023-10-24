import { getOneTask, getProductInState } from "../service/products.js"

const id = new URLSearchParams(window.location.search).get('id')

//Inicializar elementos
const product_image = document.getElementById("product-image")
const product_title = document.getElementById("product-title")
const product_time = document.getElementById("product-time")
const product_description = document.getElementById("product-description")
const product_category = document.getElementById("product-category")

const  productosRelacionadosContainer = document.getElementById("productos-relacionados");

const fillProductosRelacionados = async (category) => {
    const tasks = await getProductInState(category);

    tasks.forEach(task => {
        //crear elemento
        productosRelacionadosContainer.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img class="card-img-top" src="${task.image}" alt="${task.category}">
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">${task.title}</h5>
                <span>Tiempo: ${task.time}</span><br>
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center d-flex gap-1 align-items-center justify-content-center">
                    <a href="/detalle.html?id=${task.id}" class="btn btn-outline-secondary mt-auto">Ver más</a>
                </div>
            </div>
          </div>
        `;
    });
}
//
const fillProduct = async () => {
    const product = await getOneTask(id);
   if(product){

    product_image.src = product.image;
    product_title.textContent =  product.title;
    product_time.textContent ="Tiempo: "+  product.time;
    product_description.textContent = product.description;
    product_category.textContent = product.category;
    fillProductosRelacionados(product.category);
   }
}

fillProduct();