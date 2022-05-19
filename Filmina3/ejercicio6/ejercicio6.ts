let dato1 = document.forms[0].dato1;

nuM.innerHTML = "Ingrese el numero a analizar:";

btnEnviar.addEventListener("click", () => {
  let numero: number = Number(dato1.value);
  if (numero == 0) {
    console.log("ingrese un numero diferente");
  } else {
    if (numero % 2 == 0) {
      console.log("el numero es par");
    } else {
      console.log("el numero es impar");
    }
  }
});
