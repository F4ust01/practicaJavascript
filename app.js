//Ejercicios de funciones

function esMayorEdad(edad) {
    if(edad>=18) {
        return true;
    } else {
        return false;
    }
}

//console.log(esMayorEdad(18));

function calcularAreaRectangulo(base, altura) {
    return base*altura;
}

//console.log(calcularAreaRectangulo(2,2));


let cadena= "";
let cadenaAlReves= "";
function esPalindromo(cadena) {

    cadenaAlReves= cadena.split("").reverse().join("");
    return cadena==cadenaAlReves
}

//console.log(esPalindromo("radar"));

function generarNumeroAleatorio() {
   return Math.ceil(Math.random()*10);
} 

//console.log(generarNumeroAleatorio());

//Ejercicios de arreglos

function obtenerSuma(arregloNumeros) {
    let suma = 0 ;
    for (i = 0; i < arregloNumeros.length; i++) {
        suma += arregloNumeros[i];
      }
      return suma;
}

 // console.log(obtenerSuma([0,1,2,3,4,5,6]))

  function obtenerPares(arreglo) {
    let nuevoArreglo= [];
    for (i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            nuevoArreglo.push(arreglo[i]);
        }
      }
      return nuevoArreglo;
  }

  //console.log(obtenerPares([1,2,3,4,5,6,7,8]))

  function obtenerPromedioPonderado(notas, pesos) {
    let sumaProductos = 0;
    let sumaPesos = 0;
  
    for (let i = 0; i < notas.length; i++) {
      sumaProductos += notas[i] * pesos[i];
      sumaPesos += pesos[i];
  }
  let promedioPonderado = sumaProductos / sumaPesos;
  return promedioPonderado;
}

//console.log(obtenerPromedioPonderado([90, 85, 95, 80],[0.3, 0.2, 0.3, 0.2]))

function obtenerMaximo(array) {
    let maximo = Number.NEGATIVE_INFINITY;
  
    array.forEach(function(numero) {
      if (numero > maximo) {
        maximo = numero;
      }
    });
  
    return maximo;
  }

  //console.log(obtenerMaximo([1,2,3,4,5,6,7,8,9,99]))

  //Ejercicios de Objetos 

  let producto = {
    nombre : "computadora",
    precio : "1000",
    cantidad : "10",
  }

function calcularTotal(producto) {
  return producto.precio*producto.cantidad;
}

// console.log(calcularTotal(producto))

let persona = {
  nombrep : "Fausto",
  edadp : 21,
  profesion : "estudiante",
}

function presentarPersona(persona) {
  return "Hola, mi nombre es "+ persona.nombrep+ ", tengo "+ persona.edadp+ " años y soy "+ persona.profesion+ ". Mucho gusto.";
}

//console.log(presentarPersona(persona))

function esMayorDeEdad(persona) {
  if(persona.edadp>=18) {
      return true;
  } else {
      return false;
  }
}

//console.log(esMayorDeEdad(persona))

function negativoPositivo(nro) {
  nro = prompt("Ingrese un número:");
  if (nro=0) {
    return "El número es 0";
  } else if (nro<0) {
    return "El número es negativo";
  } else {
    return "El número es positivo";
  }
}

// Solicitar un número al usuario
var numero = parseInt(prompt("Ingrese un número:"));

// Función para verificar si un número es primo
function esPrimo(num) {
  // Los números menores o iguales a 1 no son primos
  if (num <= 1) {
    return false;
  }

  // Verificar si el número es divisible por algún otro número menor que él
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  // Si no es divisible por ningún otro número, es primo
  return true;
}

// Verificar si el número ingresado es primo
if (esPrimo(numero)) {
  console.log(numero + " es un número primo.");
} else {
  console.log(numero + " no es un número primo.");
}

// Solicitar la temperatura al usuario
var temperatura = parseFloat(prompt("Ingrese la temperatura:"));

// Solicitar la unidad de temperatura al usuario
var unidad = prompt("Ingrese la unidad de temperatura (C para Celsius, F para Fahrenheit):");

// Función para convertir Celsius a Fahrenheit
function celsiusToFahrenheit(tempCelsius) {
  var tempFahrenheit = (tempCelsius * 9/5) + 32;
  return tempFahrenheit;
}

// Función para convertir Fahrenheit a Celsius
function fahrenheitToCelsius(tempFahrenheit) {
  var tempCelsius = (tempFahrenheit - 32) * 5/9;
  return tempCelsius;
}

// Verificar la unidad de temperatura ingresada por el usuario y realizar la conversión correspondiente
if (unidad.toUpperCase() === "C") {
  var temperaturaFahrenheit = celsiusToFahrenheit(temperatura);
  console.log(temperatura + " grados Celsius equivalen a " + temperaturaFahrenheit + " grados Fahrenheit.");
} else if (unidad.toUpperCase() === "F") {
  var temperaturaCelsius = fahrenheitToCelsius(temperatura);
  console.log(temperatura + " grados Fahrenheit equivalen a " + temperaturaCelsius + " grados Celsius.");
} else {
  console.log("Unidad de temperatura no válida. Por favor, ingrese 'C' para Celsius o 'F' para Fahrenheit.");
}


// Variable para almacenar el total de la compra
var totalCompra = 0;

// Función para verificar si un valor es numérico
function esNumero(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

// Ciclo para ingresar los precios de los productos
while (true) {
  var precio = prompt("Ingrese el precio del producto (o escriba 'total' para obtener el total de la compra):");

  // Verificar si se ingresó la palabra "total" para finalizar el ingreso de precios
  if (precio.toLowerCase() === "total") {
    break;
  }

  // Verificar si el valor ingresado es un número válido
  if (!esNumero(precio)) {
    console.log("Precio inválido. Por favor, ingrese un número válido.");
    continue;
  }

  // Sumar el precio al total de la compra
  totalCompra += parseFloat(precio);
}

// Mostrar el total de la compra
console.log("Total de la compra: $" + totalCompra.toFixed(2));
