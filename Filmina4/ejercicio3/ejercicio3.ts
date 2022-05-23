let contador: number = 1;
let suma: number = 0;
let nota: number;
let promedio: number;

btnEnviar.addEventListener("click", () => {
    for (let contador = 1; contador <= 10; contador++) {
    nota = Number(prompt("ingrese una nota:"));
    suma = suma + nota;
    }
promedio = suma / 10;
console.log("el promedio del alumno es " promedio);
});
