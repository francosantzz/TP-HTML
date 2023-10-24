

//Imports
import { getTasks } from "../service/products.js"

//Instancias de elementos
const contenedor_PorHacer = document.getElementById("Contenedor-PorHacer")
const contenedor_EnProduccion = document.getElementById("Contenedor-EnProduccion")
const contenedor_PorTestear = document.getElementById("Contenedor-PorTestear")
const contenedor_Completada = document.getElementById("Contenedor-Completada")





const fillProducts = async ()=> {
    const products = await getTasks()
    
    products.forEach(product => {
        const category = product.category

        let container;
        if(category === "Por Hacer"){
            container = contenedor_PorHacer
        }else if(category === "En Producción"){
            container = contenedor_EnProduccion
        }else if(category === "Por Testear"){
            container = contenedor_PorTestear
        }else if(category === "Completadas"){
            container = contenedor_Completada
        }
    
        //Copiar elemento en la categoría
        container.innerHTML += `<div class="col">
        <div class="card h-100">
          <img 
            style="min-height: 200px; max-height: 200px;"
            class="card-img-top"
            src="${product.image}" 
            alt=""
          >
          <div class="card-body p-4">
            <div class="text-center">
              <h5 class="fw-bolder">${product.title}</h5>
              <span>Tiempo: ${product.time}</span>
            </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              <a href="/detalle.html?id=${product.id}" class="btn btn-outline-primary mt-auto">
                Ver Tarea
              </a>
            </div>
          </div>
        </div>
      </div>`
    });
}
fillProducts();

fillTasks();

