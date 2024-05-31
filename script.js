// Metric/Imperial Converter
// La funcionalidad de la web será la siguiente:
// - El usuario podrá introducir un número en un input y al pulsar el botón de convertir, la aplicación convertirá el número introducido a el equivalente métrico e imperial.

// - Obtener los elementos del DOM: Input, botón y div donde se mostrará el resultado.
// - Añadir un evento al botón de convertir que al hacer click llame a una función que se encargará de hacer la conversión.
// - Crear una función que se encargue de hacer la conversión de métrico a imperial y viceversa.
// - Mostrar el resultado en el div correspondiente utlizando innerHTML y template strings.

const inputEl = document.getElementById("input-value");
const buttonEl = document.getElementById("convert-button");
let lentgthEl = document.getElementById("length-result");
let volumeEl = document.getElementById("volume-result");
let massEl = document.getElementById("mass-result");

// convertir el valor introducido en el input de metros a pies, y de pies a metros  (1 pie = 0.3048 metros)  (1 metro = 3.28084 pies)

const meterToFeet = (meter) => { return meter * 3.281;}
const feetToMeter = (feet) => { return feet * 0.305;}

const literToGallon = (liter) => { return liter * 0.264;}
const gallonToLiter = (gallon) => { return gallon * 3.787;}

const kilogramToPound = (kilogram) => { return kilogram * 2.205;}
const poundToKilogram = (pound) => { return pound * 0.454;}

buttonEl.addEventListener("click", ()  => {
  let inputValue = inputEl.value;
  let meterResult = meterToFeet(inputValue);
  let feetResult = feetToMeter(inputValue);
  let literResult = literToGallon(inputValue);
  let gallonResult = gallonToLiter(inputValue);
  let kilogramResult = kilogramToPound(inputValue);
  let poundResult = poundToKilogram(inputValue);

  lentgthEl.innerHTML = ` ${inputValue} meters = ${meterResult.toFixed(
    3
  )} feet | ${inputValue} feet = ${feetResult.toFixed(3)} meters`;
  volumeEl.innerHTML = ` ${inputValue} liters = ${literResult.toFixed(
    3
  )} gallons | ${inputValue} gallons = ${gallonResult.toFixed(3)} liters`;
  massEl.innerHTML = ` ${inputValue} kilograms = ${kilogramResult.toFixed(
    3
  )} pounds | ${inputValue} pounds = ${poundResult.toFixed(3)} kilograms`;
});
