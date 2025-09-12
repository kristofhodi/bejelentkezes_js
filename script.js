document.getElementById("bejelentkezes").addEventListener("click", () => {
    const email = document.getElementById("emailB").value;
    const jelszo = document.getElementById("jelszoB").value;
    const szoveg = document.getElementById("szoveg");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        szoveg.innerHTML = "Kérem add meg az email címedet!";
    } else if (!emailRegex.test(email)) {
        szoveg.innerHTML = "Kérlek valós email címet adj meg!";
    } else if (!jelszo) {
        szoveg.innerHTML = "Kérem add meg a jelszavad!";
    } else {
        szoveg.innerHTML = "A bejelentkezés sikeres volt!";
    }
});