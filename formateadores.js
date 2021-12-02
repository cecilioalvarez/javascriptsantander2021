function mostrarErrorCaja(idcaja,idspanerror) {
       
  var eError= document.getElementById(idspanerror);

  if (validarCajaNoEstaVacia(idcaja)) {
    eError.style.display = "none";
  } else {
    eError.style.display = "inline";
  }

}
