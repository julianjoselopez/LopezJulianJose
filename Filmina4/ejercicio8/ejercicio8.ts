let nume1 = document.forms[0].num1;
let nume2 = document.forms[0].num2;
let resultado:number = 0;

dato1.innerHTML = "Ingrese el numero del cual quiere la tabla:";
dato2.innerHTML = "Ingrese hasta que numero:";

btnEnviar.addEventListener("click", () => {
  let numero1: number = Number(nume1.value);
  let numero2: number = Number(nume2.value);
  for (let index = 1; index <= numero2; index++) {
    resultado= resultado + numero1;
    console.log(numero1, " x " index " = " resultado);
});
