/**
 * A p_valasz bekezdés írása a szövegmező módosítása után.
 */
function onchange_EK() {
  var v_elem = document.getElementById("textarea_name_szoveg");
  var v_ertek = v_elem.value;
  v_ertek = v_ertek.replace(/\r\n/gm, "[CrNl]");
  v_ertek = v_ertek.replace(/\r/gm, "[Cr]");
  v_ertek = v_ertek.replace(/\n/gm, "[Nl]");
  if (v_ertek !== "") {
    document.getElementById("p_valasz").innerHTML = "Tehát ezt írtad, és megjelöltem a sorvége karaktereket:<br><q>" + v_ertek + "<\/q>";
  } else {
    document.getElementById("p_valasz").innerHTML = "Hohó ! Mi lesz a válasszal ?";
  }
} // onchange_EK()

function t30_2b_ini() {
  var v_elem = document.getElementById("textarea_name_szoveg");
  v_elem.onchange = function() {
    onchange_EK();
  };
} // t30_1b_ini

//window.onload = t30_1b_ini;
window.addEventListener("load", t30_2b_ini);