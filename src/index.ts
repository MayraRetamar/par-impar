let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");
btnEnviar.addEventListener("click", () => {
  let numero: number = Number(dato.value);
  if (numero == 0) {
    console.log("El numero ingresado es :" + numero);
  } else if (numero % 2 == 0) {
    console.log("el numero ingresado es par");
  } else {
    console.log("El numero ingresado es impar");
  }
});
