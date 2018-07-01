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
  var v_button_elem = document.getElementById("button_segites");
  v_button_elem.onclick = function() {
    if (typeof v_ablak_segites == "undefined" || v_ablak_segites.closed) {
      v_ablak_segites = window.open("", "", "menubar=no, toolbar=no, status=no, width=310, height=300");
      v_ablak_segites.document.write("<p>A bejelentkezéshez kötelező megadni a regisztácónál használt</p>");
      v_ablak_segites.document.write("<ul>");
      v_ablak_segites.document.write("<li>Felhasználó azonosítót (Felhasználó),</li>");
      v_ablak_segites.document.write("<li>Jelszót.</li>");
      v_ablak_segites.document.write("</ul>");
      v_ablak_segites.document.write("<p>A VIP megadása nem kötelező, de ha van VIP kódja,");
      v_ablak_segites.document.write(" akkor a szokásosnál több lehetőség áll rendelkezésére.</p>");
      v_ablak_segites.document.title = "Kitöltési útmutató";
    } else {
      window.alert("Figyelem!\nA kitöltési útmutató már nyitva.");
    }
    return false;
  };
} // t40_1b_ini
//window.onload = t30_1b_ini;
window.addEventListener("load", t40_1b_ini);