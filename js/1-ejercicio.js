/*Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

const edad = parseInt(prompt("Introducí tu edad por favor"));

if (edad > 18) {
  document.write("Felicidades! Ya puedes conducir");
} else if (edad < 18) {
  alert("El número ingresado NO es válido");
}
