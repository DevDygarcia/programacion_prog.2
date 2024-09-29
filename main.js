// document.getElementById("btn").addEventListener("click", function(e) {

//     e.preventDefault()
   
//     const base = parseFloat (document.getElementById("base").value)
//     const altura = parseFloat (document.getElementById("altura").value)
    
      
//     if (isNaN(base) || isNaN(altura)){
//         alert("Faltan valores o valores no ingresados")
//     }
    
//     const n1 = Number(base)
//     const n2 = Number(altura)
//     const area = (n1 * n2) / 2;
    
//     document.getElementById("resultado").innerText=`El área del triángulo es: ${area}`;

//     console.log("El area del triangulo es: " + area )

// });

// document.getElementById("btn1").addEventListener("click", function(e) {

//     e.preventDefault()
   
//     const nombre = document.getElementById("nombre").value
//     const apellido = document.getElementById("apellido").value
//     const fecha = parseFloat(document.getElementById("fecha").value)

  
      
//     // if (isNaN(nombre) || isNaN(apellido) ||isNaN(fecha)){
//     //     alert("Faltan valores o valores no ingresados")
//     // }
     
//     const edad = 2024 - fecha;
    
//         document.getElementById("resultado2").innerText=`El usuario es: ${nombre} ${apellido} ${edad}`;
 
//     console.log(nombre + apellido + edad)

// });

document.getElementById("btn2").addEventListener("click", function(e) {

    e.preventDefault()
   
const numMes = parseInt(document.getElementById("mes").value)

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

if ( numMes > 0 && numMes <=12) {
    document.getElementById("resultado3").innerText = `El número correspondiente a este es: ${meses[numMes -1]}`
} else {
document.getElementById("resultado3").innerText = `Este número no corresponde a un mes`
}

});

document.getElementById("btn3").addEventListener("click", function(e) {

    e.preventDefault()
   
const numero = parseInt(document.getElementById("numero").value)

if (isNaN(numero)) {
    document.getElementById("resultado4").innerText = "Por favor ingresar un valor valido"
}

let resultado = `Tabla de multiplicar del ${numero}: \n`;
for (let i =1; i <=12; i++) {
     resultado += `${numero} x ${i} = ${numero*i}\n`;
}

document.getElementById(`resultado4`).innerText += resultado;

});

