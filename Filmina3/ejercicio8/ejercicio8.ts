let dato1 = document.forms[0].dato1;

nuM.innerHTML = "Ingrese el sueldo:";

btnEnviar.addEventListener("click", () => {
  let sueldo: number = Number(dato1.value);
  let nuevoSueldo: number = 0;
  
  if (sueldo <= 15000) {
    nuevoSueldo = sueldo * 1.2;
    console.log("El nuevo monto a cobrar es" nuevoSueldo);
  } else {
    if (sueldo <=20000) {
      nuevoSueldo = sueldo * 1.1;
    console.log("El nuevo monto a cobrar es" nuevoSueldo);
    } else {
       if (sueldo <=25000) {
        nuevoSueldo = sueldo * 1.05;
        console.log("El nuevo monto a cobrar es" nuevoSueldo);   
       } else {
        console.log("Disculpe, no hay aumento, va a seguir cobrando " sueldo);   
       } 
      }
    }
});
