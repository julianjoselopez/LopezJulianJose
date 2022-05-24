let num1 = document.forms[0].dato1;
let num2 = document.forms[0].dato2;

nume1.innerHTML = "Ingrese el primer numero:";
nume2.innerHTML = "Ingrese el segundo numero:";

btnEnviar.addEventListener("click", () => {
  let numero1: number = Number(num1.value);
  console.log("el primer numero ingresado es " + numero1);
  let numero2: number = Number(num2.value);
  console.log("el segundo numero ingresado es " + numero2);
  let contador: number = numero1;
  let suma: number = 0;
  while (contador <= numero2) {
    suma = suma + contador;
    contador++;
  }
  console.log("la suma entre numeros es "suma);
});
