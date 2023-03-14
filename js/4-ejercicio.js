/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

var suma = 0;

do {
  var numero = prompt("Introducí un número por favor");

  if (Number(numero) == numero) {
    numero = Number(numero);
    suma = suma + numero;
  } else {
    if (numero != undefined) {
      alert(
        numero + " No es un número! Intenta nuevamente introducir un número"
      );
    }
  }
} while (numero != undefined);

document.write(suma);
