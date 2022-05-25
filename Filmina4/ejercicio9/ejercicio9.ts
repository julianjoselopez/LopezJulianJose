btnEnviar.addEventListener("click", () => {
  let maxNumber: number = 0;

  let num: number = Number(prompt("Ingrese un número"));
  while (num !== 0) {
    if (num > maxNumber) {
      maxNumber = num;
    }
    num = Number(prompt("Ingrese un número"));
  }
  if (num == 0) {
    console.log("El número máximo es,"maxNumber);
  }
});
