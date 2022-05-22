let num1 = document.forms[0].dato1;
let num2 = document.forms[0].dato2;
let num3 = document.forms[0].dato3;
let num4 = document.forms[0].dato4;

vuelta1.innerHTML = "Ingrese la vuelta numero 1";
vuelta2.innerHTML = "Ingrese la vuelta numero 2";
vuelta3.innerHTML = "Ingrese la vuelta numero 3";
vuelta4.innerHTML = "Ingrese la vuelta numero 4";

btnEnviar.addEventListener("click", () => {
  let vuelta1: number = Number(num1.value);
  let vuelta2: number = Number(num2.value);
  let vuelta3: number = Number(num3.value);
  let vuelta4: number = Number(num4.value);
  let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
  console.log("el tiempo total es " + tiempoTotal);
  let promedioVuelta: number = tiempoTotal / 4;
  console.log("el promedio de vuelta es " + promedioVuelta);
});
