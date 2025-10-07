const szoveg = document.getElementById("szoveg");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById("bejelentkezes").addEventListener("click", async () => {
    const email = document.getElementById("emailB").value.trim();
    const jelszo = document.getElementById("jelszoB").value.trim();

    if (!email) {
        szoveg.innerHTML = "Kérlek add meg az email címedet!";
        return;
    }
    if (!emailRegex.test(email)) {
        szoveg.innerHTML = "Kérlek valós email címet adj meg!";
        return;
    }
    if (!jelszo) {
        szoveg.innerHTML = "Kérlek add meg a jelszavad!";
        return;
    }

    try {
        const res = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password: jelszo })
        });

        if (!res.ok) {
            const err = await res.json();
            szoveg.innerHTML = err.message || "Hiba történt a bejelentkezés során!";
            return;
        }

        const user = await res.json();
        szoveg.innerHTML = `Bejelentkezés sikeres! Üdv, ${user.email}`;
    } catch (error) {
        szoveg.innerHTML = "Nem sikerült kapcsolódni a szerverhez!";
    }
});

document.getElementById("regisztracio").addEventListener("click", async () => {
    const email = document.getElementById("emailR").value.trim();
    const jelszo = document.getElementById("jelszoR").value.trim();
    const jelszoujra = document.getElementById("jelszoRR").value.trim();

    if (!email) {
        szoveg.innerHTML = "Kérlek add meg az email címedet!";
        return;
    }
    if (!emailRegex.test(email)) {
        szoveg.innerHTML = "Kérlek valós email címet adj meg!";
        return;
    }
    if (!jelszo) {
        szoveg.innerHTML = "Kérlek add meg a jelszavad!";
        return;
    }
    if (jelszo !== jelszoujra) {
        szoveg.innerHTML = "A két jelszó nem egyezik meg!";
        return;
    }

    try {
        const res = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password: jelszo })
        });

        if (!res.ok) {
            const err = await res.json();
            szoveg.innerHTML = err.message || "Hiba történt a regisztráció során!";
            return;
        }

        const user = await res.json();
        szoveg.innerHTML = `Regisztráció sikeres! Üdv, ${user.email}`;
    } catch (error) {
        szoveg.innerHTML = "Nem sikerült kapcsolódni a szerverhez!";
    }
});

document.getElementById("registerFormButton").addEventListener("click", () => {
    document.getElementById("signInForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
});

document.getElementById("vissza").addEventListener("click", () => {
    document.getElementById("signInForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
});
