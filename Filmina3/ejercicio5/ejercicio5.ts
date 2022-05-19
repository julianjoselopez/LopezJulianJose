let num1 = document.forms[0].dato1;
let num2 = document.forms[0].dato2;
let num3 = document.forms[0].dato3;

nuM1.innerHTML = "Ingrese el primer numero";
nuM2.innerHTML = "Ingrese el segundo numero";
nuM3.innerHTML = "Ingrese el tercer numero";

btnEnviar.addEventListener("click", () => {
  let numero1: number = Number(num1.value);
  let numero2: number = Number(num2.value);
  let numero3: number = Number(num3.value);
  let mayor: number = numero1;
    if (numero2 > mayor) {
      mayor = numero2;
    }
    if (numero3 > mayor) {
      mayor = numero3;
    }
  console.log("el numero mayor es "mayor);
});
