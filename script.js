const szoveg = document.getElementById("szoveg");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById("bejelentkezes").addEventListener("click", () => {
    const email = document.getElementById("emailB").value;
    const jelszo = document.getElementById("jelszoB").value;

    if (!email) {
        szoveg.innerHTML = "Kérlek add meg az email címedet!";
    } else if (!emailRegex.test(email)) {
        szoveg.innerHTML = "Kérlek valós email címet adj meg!";
    } else if (!jelszo) {
        szoveg.innerHTML = "Kérlek add meg a jelszavad!";
    } else {
        szoveg.innerHTML = "A bejelentkezés sikeres volt!";
    }
});

document.getElementById("regisztracio").addEventListener("click", () => {
    const email = document.getElementById("emailR").value;
    const jelszo = document.getElementById("jelszoR").value;
    const jelszoujra = document.getElementById("jelszoRR").value;

    if (!email) {
        szoveg.innerHTML = "Kérlek add meg az email címedet!";
    } else if (!emailRegex.test(email)) {
        szoveg.innerHTML = "Kérlek valós email címet adj meg!";
    } else if (!jelszo) {
        szoveg.innerHTML = "Kérlek add meg a jelszavad!";
    } else if (jelszo != jelszoujra) {
        szoveg.innerHTML = "A két jelszó nem egyezik meg!"
    }else {
        szoveg.innerHTML = "A regisztráció sikeres volt!";
    }
});