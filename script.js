document.getElementById("bejelentkezes").addEventListener("click", () => {
    const email = document.getElementById("emailB").value;
    const jelszo = document.getElementById("jelszoB").value;
    const szoveg = document.getElementById("szoveg");

    //emailt vhogy ellenorizni kell idk how

    if (!jelszo) {
        szoveg.innerHTML = "Kérem add meg a jelszavad!";
    } else {
        szoveg.innerHTML = "A bejelentkezés sikeres volt!";
    }
});