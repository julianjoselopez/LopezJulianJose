let nume1 = document.forms[0].dato1;
let nume2 = document.forms[0].dato2;
let nume3 = document.forms[0].dato3;
let nume4 = document.forms[0].dato4;
let nume5 = document.forms[0].dato5;
let nume6 = document.forms[0].dato6;
let nume7 = document.forms[0].dato7;
let nume8 = document.forms[0].dato8;
let nume9 = document.forms[0].dato9;
let nume10 = document.forms[0].dato10;

num1.innerHTML = "Ingrese la nota 1";
num2.innerHTML = "Ingrese la nota 2";
num3.innerHTML = "Ingrese la nota 3";
num4.innerHTML = "Ingrese la nota 4";
num5.innerHTML = "Ingrese la nota 5";
num6.innerHTML = "Ingrese la nota 6";
num7.innerHTML = "Ingrese la nota 7";
num8.innerHTML = "Ingrese la nota 8";
num9.innerHTML = "Ingrese la nota 9";
num10.innerHTML = "Ingrese la nota 10";

btnEnviar.addEventListener("click", () => {
  let nota1: number = Number(nume1.value);
  let nota2: number = Number(nume2.value);
  let nota3: number = Number(nume3.value);
  let nota4: number = Number(nume4.value);
  let nota5: number = Number(nume5.value);
  let nota6: number = Number(nume6.value);
  let nota7: number = Number(nume7.value);
  let nota8: number = Number(nume8.value);
  let nota9: number = Number(nume9.value);
  let nota10: number = Number(nume10.value);
  
  let promedio: number = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10)/10;
  console.log("el promedio del alumno es " promedio);
});
