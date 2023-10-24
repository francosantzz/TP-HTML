# Proyecto de Desarrollo Web

Este proyecto es una aplicación web que muestra tareas organizadas en diferentes categorías. Para cargar y mostrar las tareas, utilizamos JSON Server para simular una API REST con un archivo JSON como fuente de datos.

## Requisitos

Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde [Node.js](https://nodejs.org/).

## Instala JSON Server si no lo tienes instalado:

npm install -g json-server

## Uso
Inicializa JSON Server con el archivo JSON proporcionado (db.json) para simular una API REST:

json-server --watch db.json 
Esto ejecutará JSON Server en el puerto 3000.

Haz click en Go Live si te encuentras en Visual Studio o abre el archivo index.html en tu navegador

La aplicación te permite hacer clic en las categorías para ver las tareas relacionadas.
