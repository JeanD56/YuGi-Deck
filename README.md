# Yu-Gi-Oh! Stream Deck Plugin

Ce plugin pour Stream Deck permet de contr�ler un jeu de cartes Yu-Gi-Oh! en utilisant des potentiom�tres et des boutons pour ajuster les points de vie des joueurs, g�rer les victoires et r�initialiser la partie.

## Fonctionnalit�s

- **Contr�le des points de vie :**
  - Utilisation de potentiom�tres pour s�lectionner les points de vie des joueurs.
  - Validation des r�glages avec un bouton d�di�.
  - D�cr�mentation des points de vie avec un d�lai configurable.
  - Affichage en temps r�el des points de vie sur le Stream Deck.

- **Gestion des victoires :**
  - Comptage des victoires pour chaque joueur.
  - Incr�mentation du compteur de victoires lorsqu'un joueur gagne une manche.
  - Affichage des compteurs de victoires sur le Stream Deck.
  - Boutons pour r�initialiser les compteurs de victoires et r�initialiser la partie.

- **Interfaces utilisateur :**
  - Utilisation intuitive des potentiom�tres et des boutons du Stream Deck.
  - Affichage clair des points de vie et des compteurs de victoires sur le Stream Deck.
  - R�alisation d'effets sonores pour confirmer les actions des joueurs (validation, d�cr�mentation des points de vie, etc.).

- **Persistence des donn�es :**
  - Sauvegarde des compteurs de victoires dans un fichier pour maintenir les donn�es entre les sessions de jeu.
  - Lecture des compteurs de victoires depuis le fichier au d�marrage du programme.

## Installation

1. Cloner ce d�p�t : `git clone https://github.com/votre-utilisateur/Yu-Gi-Oh-StreamDeck.git`
2. Installer les d�pendances : `npm install`
3. Compiler le plugin : `npm run build`

## Utilisation

1. Lancez l'application Stream Deck sur votre ordinateur.
2. Allez dans les param�tres et ajoutez le plugin Yu-Gi-Oh! en sp�cifiant le chemin vers le fichier manifest.json g�n�r�.
3. Vous pouvez maintenant utiliser les fonctionnalit�s du plugin directement depuis votre Stream Deck.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE.md](LICENSE.md) pour plus de d�tails.
