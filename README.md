# Technical Test - Ferway

Énoncé: Recréer le plus fidèlement possible l'application fournie. </br>
Le site: https://monprochainmetro.herokuapp.com/

## Pour commencer

### Pré-requis

Il n'y a rien à installer de nouveau sur votre machine, sauf bien évidemment, le clone de ce repo. </br>
Veillez à tout de même à avoir un serveur local afin de pouvoir lancer l'application. (Extension VSCODE, WAMP, ...)

### Installation

1- Lancez votre invité de commande. </br>
2- Exécutez la commande ``git clone https://github.com/FlorentParis/Ferway.git`` pour clone le fichier. </br>
3- Il n'y a plus qu'à lancer le serveur local. </br>

## Choix techniques

J'ai choisi d'utiliser React afin de produire cet exercice, malgré mon manque d'expérience sur ce framework. J'ai pris pas mal de temps à le prendre en main, c'est pour cela que j'ai refait l'exercice une deuxième fois (Cela est expliqué dans [Temps utilisé](##temps-utilise)). </br>
J'aurais été plus à l'aise en Javascript Vanilla, et je pense pouvoir faire entièrement cet exercice avec ce dernier. Mais cela est effectivement beaucoup plus simple en React, comme vous l'aviez dit durant notre dernier entretien.

## Temps utilisé

Total : 3h </br>
Inspection de l'application model + recherche/compréhension de l'api : 30min </br>
Requête AJAX : 30min </br>
React : 1h </br>
Peaufinage et mise en place du CSS : 20min </br>
Mise en ligne : 40min </br>

Les temps affichés sont ceux de ma deuxième tentative, la première tentative n'a pas été de longue durée, et j'avais décidé de tout reprendre a 0, parce que mon React ne me satisfaisait pas du tout, je n'avais qu'une seule class, les 'résultats' pour chaque destination étaient gérés avec une fonction, ... 

## Bilan de l'exercice

Cet exercice était très sympa à faire, j'ai éprouvé certaines difficultés dues à ma première fois sur React, mais je ne pense pas que c'étaient les pires de mon point de vue.

### Les difficultés rencontrés :

- Je n'ai pas pu résoudre le bug de la requête AJAX par faute de temps, je pense avoir une solution mais je ne l'ai pas appliquée, ne sachant pas combien de temps cela me prendrait.
- J'ai voulu déployer pour la première fois sur Heroku, et je suis tombé sur cette erreur : ``! [remote rejected] main -> main (pre-receive hook declined)``. Et donc pour la même raison que ma première difficulté, j'ai préféré utiliser un hébergeur que je connais : Netlify.

### Mes réussites :

- Je suis très content d'avoir pu réaliser cet exercice en React, il doit y'avoir quelques erreurs comme cela ne fait que très peu de temps que j'apprends ce framework, mais j'ai fait de mon mieux avec mes connaissances actuelles.
- À part le fait que sur certains refresh de la page, il y a un bug d'affichage, je trouve que ma version de l'application est plutôt semblable à l'original. 

### Evolutions possibles :

- Je vais apprendre les promesses, l'async/await, ... Car l'asynchrone pose beaucoup de problèmes d'organisation si on ne connaît pas ces derniers.
- Je vais aussi me renseigner sur le déploiement avec Heroku.
- Bien évidemment, une grande évolution est possible sur React étant donné que je suis encore à mes débuts avec ce framework.

## Mot de fin

Je vous remercie encore pour cet exercice, si vous avez des questions sur mon code ou autres, envoyez-moi un mail ou alors contactez-moi sur mon Linkedin ; https://www.linkedin.com/in/florentparis/

## Lien vers l'application

https://ferway-test.netlify.app/
