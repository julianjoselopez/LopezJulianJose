btnEnviar.addEventListener("click", () => {
  let numero = prompt("Introduzca un numero positivo");
  while (numero <= 0) {
    numero = prompt("Introduzca un numero positivo diferente");;
  } 
  if (numero % 2 == 0) {
      console.log("el numero es par");
    } else {
      console.log("el numero es impar");
    }
  }
});
