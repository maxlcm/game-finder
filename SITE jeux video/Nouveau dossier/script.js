// Suggestions de jeux fictives
const jeux = ["The Legend of Zelda", "Super Mario", "Minecraft", "Fortnite", "League of Legends", "Apex Legends", "Valorant", "", "Call of Duty"];

function showSuggestions() {
    const input = document.getElementById("game-search").value.toLowerCase();
    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";  // Clear previous suggestions

    if (input) {
        // Filtrer les jeux qui correspondent à l'input
        const matches = jeux.filter(jeu => jeu.toLowerCase().includes(input));
        matches.forEach(match => {
            const li = document.createElement("li");
            li.textContent = match;
            li.onclick = () => {
                document.getElementById("game-search").value = match;
                suggestions.innerHTML = "";
            };
            suggestions.appendChild(li);
        });
    }
}

function searchGame() {
    const query = document.getElementById("game-search").value;
    if (query) {
        alert(`Vous avez recherché: ${query}`);
    } else {
        alert("Veuillez entrer un nom de jeu.");
    }
}
/*4c1cd79030714cb0a2c505e58a5ab44d*/



