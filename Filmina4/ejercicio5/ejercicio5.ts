let index: number;
let cadena: string = "";

btnEnviar.addEventListener("click", () => {
  for (let index = 1; index <= 100; index++) {
    if (index % 2 == 0 || index % 3 == 0) {
      cadena = cadena + index + ",";
    }
  }
  console.log(cadena);
});
