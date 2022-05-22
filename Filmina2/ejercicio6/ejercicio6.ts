let num1 = document.forms[0].dato1;
let num2 = document.forms[0].dato2;

nume1.innerHTML = "Ingrese el primer numero:";
nume2.innerHTML = "Ingrese el segundo numero:";

btnEnviar.addEventListener("click", () => {
  let numero1: number = Number(num1.value);
  console.log("el primer numero ingresado es " + numero1);
  let numero2: number = Number(num2.value);
  console.log("el segundo numero ingresado es " + numero2);
  let resultado: number = numero1 + numero2;
  console.log("la suma de los dos es " + resultado);
});
