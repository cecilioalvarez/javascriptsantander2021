function validarCajaNoEstaVacia(idcaja) {
  var eCaja = document.getElementById(idcaja);
  if (eCaja.value != "") {
    return true;
  } else {
    return false;
  }
}

function validarImporteMinimo(caja, importeMinimo) {
  var importeCaja = document.getElementById(caja).value;

  if (importeCaja >= importeMinimo) {
    return true;
  } else return false;
}
