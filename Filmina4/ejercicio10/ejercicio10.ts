btnEnviar.addEventListener("click", () => {
  let total: number = 0;
  let positivos: number = 0;
  let porcentaje: number = 0;

  let num: number = Number(prompt("Ingrese un número"));
  while (num !== 0) {
    if (num > 0) {
      positivos++;
    }
    total++;
    num = Number(prompt("Ingrese un número"));
  }
  if (total > 0) {
    porcentaje = (positivos * 100) / total;
    console.log(positivos + " positivos. " + porcentaje + "% del total.");
  }
});
