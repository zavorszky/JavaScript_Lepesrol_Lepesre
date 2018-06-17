/**
 * A p_valasz bekezdés írása a szövegmező módosítása után.
 */
function t40_1b_ini() {
  var v_form_elem = document.getElementById("form_regisztalas");
  v_form_elem.onsubmit = function() {
    var v_elem;
    v_elem = document.getElementById("text_nev");
    if (v_elem.value === "") {
      window.alert("Nincs kitöltve a név !");
      v_elem.focus();
      return false;
    }
    v_elem = document.getElementById("password_jelszo");
    if (v_elem.value === "") {
      window.alert("Üres a jelszó mező !");
      v_elem.focus();
      return false;
    }
    window.alert("Nincs csatlakozva a kiszolgálóhoz!");
    return fales;
  };
} // t30_1b_ini

//window.onload = t30_1b_ini;
window.addEventListener("load", t40_1b_ini);