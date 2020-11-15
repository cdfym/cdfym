(function()
{
  var formulario;
  window.onload = function()
  {
    formulario = document.getElementById("f");
    ingresar = document.getElementById("ingresar");
    ingresar.onclick = ingresando;
  }

  ingresando = function()
  {
    if (validarUsuario() && validarClave())
    {
      formulario.submit();
    }
  }

  function validarUsuario()
  {
    var usuario = formulario.usuario.value;
    var expresionUsuario = /[\w\*\-\_\.\@]{8,20}/;
    var validar = true;
    
    if (!expresionUsuario.test(usuario))
    {
        alert("El Usuario: \n * Debe tener mínimo 8 caracteres, máximo 20" +
          "\n * Puede contener letras, números y caracteres especiales");
        validar = false;
    }
    if (validar)
    {
        return true;
    }
    else
    {
        formulario.usuario.focus();
        return false;
    }
  }

  function validarClave()
  {
    var clave = formulario.clave.value;
    var expresionClave = /[\w\*\-\_\.\@]{8,20}/;
    var validar = true;
    
    if (!expresionClave.test(clave))
    {
      alert("La Contraseña: \n * Debe tener mínimo 8 caracteres, máximo 20" +
        "\n * Puede contener letras, números y caracteres especiales \n");
      validar = false;
    }
    if (validar)
    {
      return true;
    }
    else
    {
      formulario.clave.focus();
      return false;
    }
  }

}())
