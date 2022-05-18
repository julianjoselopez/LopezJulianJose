let altur = document.forms[0].dato1;

talla.innerHTML = "Ingrese la altura en Metros:";

btnEnviar.addEventListener("click", () => {
  let altura: number = Number(altur.value);

  if (altura > 1.3) {
    console.log("Este individuo puede pasar a la montaña rusa");
  } else {
    console.log("Este individuo tiene prohibido el ingreso");
  }
});
