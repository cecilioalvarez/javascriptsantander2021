function validarCajaNoEstaVacia(idcaja) {

    var eCaja= document.getElementById(idcaja);
    if (eCaja.value != "") {
    return true;
    } else {
     return false;
    }
  }

  function validarImporteMinimo(caja, importeMinimo) {
    /*
    if (importe >=100) {
      return true;
    }else return false;
    */
    var importeCaja=document.getElementById(caja).value;
    return importeCaja>=importeMinimo?true:false;
  }