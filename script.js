const btnSignIn = document.getElementById("sign-in"),
  btnSignUp = document.getElementById("sign-up"),
  formRegister = document.querySelector(".register"),
  formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", (e) => {
  formRegister.classList.add("hide");
  formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", (e) => {
  formLogin.classList.add("hide");
  formRegister.classList.remove("hide");
});

/*scrip para validar cuenta nueva*/

function validarFormulario1() {
  let nombre = document.getElementById("txtNombre").value;
  let email = document.getElementById("txtEmail").value;
  let telefono = document.getElementById("txtNumero").value;
  let password = document.getElementById("txtPassword").value;
  let password2 = document.getElementById("txtPassword2").value;

  if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
    alert("No se ingreso el nombre o se coloco espacios en blanco");
    return false;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
    alert("Ingrese un correo electronico valido");
    return false;
  }

  if (!/^[0-9]{9}$/.test(telefono)) {
    alert("Ingrese un numero telefonico valido");
    return false;
  }

  /*Minimo 6 caracteres, maximo 15, una letra mayuscula, una letra miniscula, no espacios en blanco, un caracter especial*/
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,15}/.test(
      password
    )
  ) {
    alert("Ingrese contraseña valida");
    return false;
  }

  if (password !== password2) {
    alert("Las contraseñas no son iguales");
    return false;
  }

  return true;
}

/*scrip para validar cuenta existente*/

function validarFormulario2() {
  let email = document.getElementById("txtCorreo").value;
  let password = document.getElementById("txtContraseña").value;

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
    alert("Ingrese un correo electronico valido");
    return false;
  }

  /*Minimo 6 caracteres, maximo 15, una letra mayuscula, una letra miniscula, no espacios en blanco, un caracter especial*/
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,15}/.test(
      password
    )
  ) {
    alert("Ingrese contraseña valida");
    return false;
  }

  return true;
}
