/**
 * A p_valasz bekezdés írása a szövegmező módosítása után.
 */
function onchange_EK() {
  var v_elem = document.getElementById("text_name_nev");
  var v_ertek = v_elem.value;
  if (v_ertek !== "") {
    document.getElementById("p_valasz").innerHTML = "Tehát <q>" + v_ertek + "<\/q> a neved :-)";
  } else {
    document.getElementById("p_valasz").innerHTML = "";
  }
} // onchange_EK()

function t3p1b_ini() {
  var v_elem = document.getElementById("text_name_nev");
  v_elem.onchange = function() {
    onchange_EK();
  };
} // t3p1b_ini

window.onload = t3p1b_ini;