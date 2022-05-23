let contador: number = 1;
let suma: number = 0;
let nota: number;
let promedio: number;

btnEnviar.addEventListener("click", () => {
  while (contador <= 10) {
    nota = Number(prompt("ingrese una nota:"));
    suma = suma + nota;
    contador++;
  }
promedio = suma / 10;
console.log("el promedio del alumno es " promedio);
});
