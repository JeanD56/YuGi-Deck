// R�cup�ration des �l�ments du Stream Deck
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

// D�finir les chemins vers les fichiers audio
const decrementSound = new Audio('decrement_sound.mp3');
const endTurnSound = new Audio('end_turn_sound.mp3');

// Fonction pour mettre � jour l'affichage des points de vie
function updateLifeDisplay() {
    player1Slider.value = player1Life;
    player2Slider.value = player2Life;
}

// Fonction pour mettre � jour l'affichage des compteurs de victoires
function updateWinCounters() {
    player1WinCounter.textContent = player1Wins;
    player2WinCounter.textContent = player2Wins;
}

// Fonction pour jouer le son de d�cr�mentation en boucle
function playDecrementSoundLoop() {
    decrementSound.loop = true;
    decrementSound.play();
}

// Fonction pour arr�ter le son de d�cr�mentation
function stopDecrementSound() {
    decrementSound.pause();
}

// Fonction pour jouer le son de fin de tour
function playEndTurnSound() {
    endTurnSound.play();
}

// Fonction pour valider les changements de points de vie
validateButton.addEventListener('click', function () {
    // Mettre � jour les points de vie avec les valeurs des sliders
    player1Life = parseInt(player1Slider.value);
    player2Life = parseInt(player2Slider.value);
    // Mettre � jour l'affichage des points de vie
    updateLifeDisplay();
});

// Fonction pour r�initialiser les points de vie et les compteurs de victoires
resetButton.addEventListener('click', function () {
    // R�initialiser les points de vie � 8000
    player1Life = 8000;
    player2Life = 8000;
    // Mettre � jour l'affichage des points de vie
    updateLifeDisplay();
    // R�initialiser les compteurs de victoires
    resetWinCounters();
});

// Fonction pour r�initialiser les compteurs de victoires
function resetWinCounters() {
    player1Wins = 0;
    player2Wins = 0;
    updateWinCounters();
}

// Fonction pour incr�menter le compteur de victoires du joueur 1
function incrementPlayer1WinCounter() {
    player1Wins++;
    updateWinCounters();
}

// Fonction pour incr�menter le compteur de victoires du joueur 2
function incrementPlayer2WinCounter() {
    player2Wins++;
    updateWinCounters();
}

// Fonction pour d�cr�menter les points de vie d'un joueur
function decrementLife() {
    // Code pour d�cr�menter les points de vie
    // ...

    // Jouer le son de d�cr�mentation en boucle
    playDecrementSoundLoop();

    // Apr�s un certain d�lai, arr�ter le son de d�cr�mentation et jouer le son de fin de tour
    setTimeout(function () {
        stopDecrementSound();
        playEndTurnSound();
    }, 5000); // 5000 millisecondes = 5 secondes (ajustez selon vos besoins)
}

// Appel de la fonction pour initialiser l'affichage des points de vie et des compteurs de victoires
updateLifeDisplay();
updateWinCounters();
