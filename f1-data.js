async function aggiornaF1() {
    try {
        const response = await fetch(
            "https://api.jolpi.ca/ergast/f1/current.json"
        );

        if (!response.ok) throw new Error("API F1 non disponibile");

        const data = await response.json();

        console.log("Dati F1 aggiornati:", data);

        window.F1_LIVE_DATA = data;

        // Aggiorna la pagina senza modificare la grafica
        if (typeof render === "function") {
            render();
        }

    } catch (error) {
        console.log("Aggiornamento F1 non riuscito:", error);
    }
}

// Aggiorna subito
aggiornaF1();

// Controlla ogni 6 ore
setInterval(aggiornaF1, 6 * 60 * 60 * 1000);
