const tarjeta = document.querySelector('#tarjeta');
const btnAbrirFormulario = document.querySelector('#btn-abrir-formulario');
const formulario = document.querySelector('#formulario-tarjeta');
const numeroTarjeta = document.querySelector('#tarjeta .numero');
const nombreTarjeta = document.querySelector('#tarjeta .nombre');
const mesExpiracion = document.querySelector('#tarjeta .month');
const yearExpiracion = document.querySelector('#tarjeta .year');
const cvv = document.querySelector('#tarjeta .cvv');
const insertarColumna= document.querySelector('#btnSend');

// Voltear la tarjeta 
const mostrarFrente = () => {
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active')
    }
}
const mostrarAtras = ()=>{
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active')
    }
}

// Girar tarjeta
// tarjeta.addEventListener('click', () => {
    
//     tarjeta.classList.toggle('active');
// });

// Abrir formulario
btnAbrirFormulario.addEventListener('click', ()=>{
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
})

// Select mes generado
for(let i= 1; i<= 12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMonth.appendChild(opcion);
}

// Select año generado 
const actualYear= new Date().getFullYear();

for(let i= actualYear; i<= actualYear + 8; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

// Input N° Tarjeta
formulario.inputNumero.addEventListener('keyup', (e)=> {
    let valorInput = e.target.value;

    formulario.inputNumero.value= valorInput
    //Elimniar espacios en blanco
    .replace(/\s/g, '')
    //Eliminar letras
    .replace(/\D/g, '')
    //Espaciar cada 4 caracteres
    .replace(/([0-9]{4})/g, '$1 ')
    //Elimina el ultimo espacio
    .trim()


    numeroTarjeta.textContent=valorInput;

    if (valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####'
    }

    //Voltear la tarjeta
    mostrarFrente()
}) 

// Input Nombre Tarjeta

formulario.inputNombre.addEventListener('keyup', (e)=>{
    let valorInput = e.target.value;

    formulario.inputNombre.value= valorInput
    .replace(/[0-9]/g, '');

    nombreTarjeta.textContent=valorInput;
    if (valorInput == ''){
        nombreTarjeta.textContent = 'DANIAL DENVER'
    }


     //Voltear la tarjeta
     mostrarFrente()

})

// Seleccionar mes y año

formulario.selectMonth.addEventListener('change', (e)=>{
    mesExpiracion.textContent= e.target.value;

    mostrarFrente()  
    
})

formulario.selectYear.addEventListener('change', (e)=>{
    yearExpiracion.textContent= e.target.value.slice(2);

    mostrarFrente() 
    
})

// CVV

formulario.inputCvv.addEventListener('keyup', (e)=>{

    mostrarAtras()

    formulario.inputCvv.value= formulario.inputCvv.value
    //Eliminar espacios en blanco
    .replace(/\s/g, '')
    //Eliminar letras
    .replace(/\D/g, '')

    cvv.textContent= formulario.inputCvv.value
})

// Insertar fila

insertarColumna.addEventListener('click', ()=>{
    let tblDatos = document.querySelector('#tblDatos').insertRow(-1);
    let col1 = tblDatos.insertCell(0);
    let col2 = tblDatos.insertCell(1);
    let col3 = tblDatos.insertCell(2);


    col1.innerHTML =  '**** **** **** '+ numeroTarjeta.textContent.slice(15);
    col2.innerHTML =  nombreTarjeta.textContent;

    if(mesExpiracion.value=''){
        col3.innerHTML =  'Sin fe'
    }
    else {
        col3.innerHTML =  mesExpiracion.textContent + '/' + yearExpiracion.textContent;

    }
    mostrarFrente()

    //Reinicio Tarjeta
    numeroTarjeta.textContent = '#### #### #### ####';
    nombreTarjeta.textContent = '';
    mesExpiracion.textContent = 'MM';
    yearExpiracion.textContent = 'AA';

    //Reinicio form
    formulario.reset()

})

