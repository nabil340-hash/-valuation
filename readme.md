Partie 3: Questions Théoriques (1 heure)
1. HTML/CSS/JS:

o Qu'elle est la différence entre le grid et le flex en CSS ?
La différence entre le grid et le flex en CSS, est que le flex permet d'organiser du contenu sur une dimension (sur une ligne ou sur une colonne). Le grid a été conçues pour une organisation bi-dimensionnelle. 

o Expliquez la différence entre les variables let, const, et var en JavaScript.
La différence entre les variables c'est leur portée. En effet chaque variables possèdes une porté qui leurs sont propres. Ces variables seront alors utilisés dans des conditions bien précices, par exemple le var a une porté que d'une fonction et ne sera pris en compte compte que pour celle-ci alors que let peut-être attribuer a une fonction mais il peut avoir une portée d'un block comme la variables const. Donc, var ce limite a une fonction alorss que let peut-être attribuer a une fonction mais aussi à un block et enfin const a les mêmes fonctions que let sauf que lui on va préférer l'utiliser pour mettre des valeurs qui vont être constants.

o Qu'est-ce que la programmation orientée objet en JavaScript ? Donnez un
exemple simple.
La programmation orientée objet consiste à modéliser un système comme une collection d'objets, où chaque objet représente un aspect particulier du système.
Comme par exemple :
var personnage = {
  nom: "Batman",
  salutation: function () {
    alert("Bonjour ! Je suis " + this.nom + ".");
  },
};

2. PHP :

o Expliquez comment vous connecteriez à une base de données MySQL en
utilisant PHP. Sans détailler.

Si on veut utiliser PHP pour interroger notre base de données MySQL, on peut le faire soit en saisissant la commande MySQL query dans le script PHP, soit en définissant la commande comme une variable et en utilisant la variable si nécessaire.

o Donnez un exemple de requête SQL pour récupérer des données d'une table
SELECT nom, prenom, age
FROM utilisateurs
WHERE ville = 'Bordeaux';