/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
 */
let resultado = "";
let texto = prompt("Introducí una cadena de texto por favor");

do {
  if (resultado == "") {
    resultado = resultado + texto;
  } else {
    resultado = resultado + "-" + texto;
  }
} while (confirm("Desea continuar?"));
document.write(resultado);
