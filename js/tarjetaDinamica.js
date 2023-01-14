const tarjeta = document.querySelector('#tarjeta');

tarjeta.addEventListener('click', () => {
    console.log("estoy probando")
    tarjeta.classList.toggle('active');
});

// const regreso = document.querySelector('#tarjeta')
// tarjeta.addEventListener('click', () => {
//     console.log("estoy probando el regreso")
//     tarjeta.classList.remove('active');
// });