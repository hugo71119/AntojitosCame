
const boton = document.querySelector('#boton')
const menu = document.querySelector('#menu')

document.addEventListener('DOMContentLoaded', function(){
    iniciarApp()
})

function iniciarApp(){
    scrollNav()
    // scrollNav2()
}
function scrollNav(){
    const enlaces = document.querySelectorAll('.nav a')
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', e => {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: 'smooth' })
        })
    })
}
// function scrollNav2(){
//     const enlaces2 = document.querySelectorAll('.navBoton a')

//     enlaces2.forEach(enlace2 => {
//         enlace2.addEventListener('click', e => {
//             e.preventDefault();

//             const seccionScroll2 = e.target.attributes.href.value;
//             const seccion2 = document.querySelector(seccionScroll2);
//             seccion2.scrollIntoView({ behavior: 'smooth' })
//         })
//     })
// }



// boton.addEventListener('click', () => {
//     window.location.href= menu  
// })