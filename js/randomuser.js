"use strict";

//VARIABLES

const boton = document.getElementById('boton')
const foto = document.getElementById('foto')
const nombre = document.getElementById('nombre')
const correo = document.getElementById('correo')
const telefono = document.getElementById('telefono')
const ciudad = document.getElementById('ciudad')
const pais = document.getElementById('pais')

//Funciones
//Enlance API https://randomuser.me/api

const generarUsuario = async () => {
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.medium;
    nombre.textContent = datos.name.first;
    correo.textContent = datos.email;
    telefono.textContent = datos.phone;
    ciudad.textContent = datos.location.city;
    pais.textContent = datos.location.country;
}

//Eventos
boton.addEventListener('click', generarUsuario);
document.addEventListener('DOMContentLoaded', generarUsuario);



