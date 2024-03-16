// Récupération des éléments du Stream Deck
const player1Slider = document.getElementById('player1Slider');
const player2Slider = document.getElementById('player2Slider');
const validateButton = document.getElementById('validateButton');
const resetButton = document.getElementById('resetButton');
const player1WinCounter = document.getElementById('player1Wins');
const player2WinCounter = document.getElementById('player2Wins');

// Initialisation des points de vie des joueurs
let player1Life = 8000;
let player2Life = 8000;

// Initialisation des compteurs de victoires
let player1Wins = 0;
let player2Wins = 0;

// Fonction pour mettre à jour l'affichage des points de vie
function updateLifeDisplay() {
    player1Slider.value = player1Life;
    player2Slider.value = player2Life;
}

// Fonction pour mettre à jour l'affichage des compteurs de victoires
function updateWinCounters() {
    player1WinCounter.textContent = player1Wins;
    player2WinCounter.textContent = player2Wins;
}

// Fonction pour valider les changements de points de vie
validateButton.addEventListener('click', function () {
    // Mettre à jour les points de vie avec les valeurs des sliders
    player1Life = parseInt(player1Slider.value);
    player2Life = parseInt(player2Slider.value);
    // Mettre à jour l'affichage des points de vie
    updateLifeDisplay();
});

// Fonction pour réinitialiser les points de vie et les compteurs de victoires
resetButton.addEventListener('click', function () {
    // Réinitialiser les points de vie à 8000
    player1Life = 8000;
    player2Life = 8000;
    // Mettre à jour l'affichage des points de vie
    updateLifeDisplay();
    // Réinitialiser les compteurs de victoires
    resetWinCounters();
});

// Fonction pour réinitialiser les compteurs de victoires
function resetWinCounters() {
    player1Wins = 0;
    player2Wins = 0;
    updateWinCounters();
}

// Fonction pour incrémenter le compteur de victoires du joueur 1
function incrementPlayer1WinCounter() {
    player1Wins++;
    updateWinCounters();
}

// Fonction pour incrémenter le compteur de victoires du joueur 2
function incrementPlayer2WinCounter() {
    player2Wins++;
    updateWinCounters();
}

// Appel de la fonction pour initialiser l'affichage des points de vie et des compteurs de victoires
updateLifeDisplay();
updateWinCounters();
