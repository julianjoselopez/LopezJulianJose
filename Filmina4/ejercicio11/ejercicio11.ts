btnEnviar.addEventListener("click", () => {
  let maxNumber: number = 0;
  let minNumber: number = 0;
  let promedio: number = 0;
  let cantidad: number = 0;
  let suma: number = 0;

  let num: number = Number(prompt("Ingrese un número"));
  minNumber = num;
  maxNumber = num;
  
  while (num !== 0) {
    if (num > maxNumber) {
      maxNumber = num;
    } else {
        if (num < minNumber) {
          minNumber = num;
      }
        suma = suma + num;
        cantidad ++;
        num = Number(prompt("Ingrese un número"));
      }
  if (num == 0) {
    promedio = suma / cantidad;
    console.log("El número máximo es,"maxNumber);
    console.log("El número mas bajo es,"minNumber);
    console.log("el promedio de los numeros ingresados es" promedio);
  }
});