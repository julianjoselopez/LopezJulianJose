let usuario: string = "juan";
let clave: string = "clavejuan";

let useringresado = document.forms[0].dato1;
let passwingresada = document.forms[0].dato2;

user.innerHTML = "Ingrese su usuario(solo letras)";
passw.innerHTML = "Ingrese su clave(solo letras)";

btnEnviar.addEventListener("click", () => {
  let usuarioingresado = useringresado.value;
  let claveingresada = passwingresada.value;

  if (usuarioingresado == usuario && claveingresada == clave) {
    console.log("bienvenido "usuario);
  } else {
    console.log("el usuario o clave son incorrectos");
  }
});
