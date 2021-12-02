function mostrarErrorCaja(idcaja,idspanerror,csscolor) {
       
  var eError= document.getElementById(idspanerror);
  eError.style.color=csscolor;
  if (validarCajaNoEstaVacia(idcaja)) {
    eError.style.display = "none";
  } else {
    eError.style.display = "inline";
  }

}
