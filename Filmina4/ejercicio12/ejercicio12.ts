btnEnviar.addEventListener("click", () => {
  let total: number = 0;
  let positivos: number = 0;
  let porcentaje: number = 0;

  let num: number = Number(prompt("Ingrese un número(corta con 0)"));
  while (num !== 0) {
    if (num > 0) {
      positivos++;
    }
    total++;
    num = Number(prompt("Ingrese un número(corta con 0)"));
  }
  if (total > 0) {
    porcentaje = (positivos * 100) / total;
    console.log(positivos + " positivos. " + porcentaje + "% del total.");
  }
});
