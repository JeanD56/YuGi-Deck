# Yu-Gi-Oh! Stream Deck Plugin

Ce plugin pour Stream Deck permet de contrôler un jeu de cartes Yu-Gi-Oh! en utilisant des potentiomètres et des boutons pour ajuster les points de vie des joueurs, gérer les victoires et réinitialiser la partie.

## Fonctionnalités

- **Contrôle des points de vie :**
  - Utilisation de potentiomètres pour sélectionner les points de vie des joueurs.
  - Validation des réglages avec un bouton dédié.
  - Décrémentation des points de vie avec un délai configurable.
  - Affichage en temps réel des points de vie sur le Stream Deck.

- **Gestion des victoires :**
  - Comptage des victoires pour chaque joueur.
  - Incrémentation du compteur de victoires lorsqu'un joueur gagne une manche.
  - Affichage des compteurs de victoires sur le Stream Deck.
  - Boutons pour réinitialiser les compteurs de victoires et réinitialiser la partie.

- **Interfaces utilisateur :**
  - Utilisation intuitive des potentiomètres et des boutons du Stream Deck.
  - Affichage clair des points de vie et des compteurs de victoires sur le Stream Deck.
  - Réalisation d'effets sonores pour confirmer les actions des joueurs (validation, décrémentation des points de vie, etc.).

- **Persistence des données :**
  - Sauvegarde des compteurs de victoires dans un fichier pour maintenir les données entre les sessions de jeu.
  - Lecture des compteurs de victoires depuis le fichier au démarrage du programme.

## Installation

1. Cloner ce dépôt : `git clone https://github.com/votre-utilisateur/Yu-Gi-Oh-StreamDeck.git`
2. Installer les dépendances : `npm install`
3. Compiler le plugin : `npm run build`

## Utilisation

1. Lancez l'application Stream Deck sur votre ordinateur.
2. Allez dans les paramètres et ajoutez le plugin Yu-Gi-Oh! en spécifiant le chemin vers le fichier manifest.json généré.
3. Vous pouvez maintenant utiliser les fonctionnalités du plugin directement depuis votre Stream Deck.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.
