let dato1 = document.forms[0].dato1;

puesto.innerHTML = "Ingrese la posicion de llegada:";

btnEnviar.addEventListener("click", () => {
  let puesto1: number = Number(dato1.value);
  if (puesto1 == 1) {
    console.log("entregar la medalla de oro");
  } else {
    if (puesto1 == 2) {
      console.log("entregar la medalla de plata");
    } else {
      if (puesto1 == 3) {
        console.log("entregar la medalla de bronce");
      } else {
        console.log("entregar mencion de participacion");
      }
    }
  }
});
