const { log } = require('console');

const user = require('prompt-sync')();

let grilles = [
    ["","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","",""],
];

let serpent = ">";
let pomme = "0";
let randomRow = Math.floor(Math.random()*grilles.length)
let randomColumn = Math.floor(Math.random()*grilles[0].length)

// initialisation de depart de la pomme(aleatoirement) 
// et du serpent(au centre de la grille)

function depart()
{
        
    grilles[grilles.length/2].splice(grilles.length/2,0,serpent)
    grilles[randomRow].splice(randomColumn,0,pomme)


    return grilles;
}


function incrementSerpent() {
    let serpentIndex = indexOfSerpent()

    for (let index = serpentIndex[1]; index <= grilles[0].length; index++) {
        serpentIndex[1] = index
        grilles[serpentIndex[0]].splice(serpentIndex[1],0,serpent)
        
    }

    return grilles



}

// initialisation et verificatiion de l'endroit du serpent pour placer la pomme dans la grille
function pommeGrille()
{
    grilles = depart();
    for (let i = 0; i <= grilles.length; i++) {
            for (let j = 0; j <= grilles[0].length; j++) {
                if (!serpent) {
                    grilles[i].splice(j,0,pomme)
                }
                
            }        
    }

    return grilles;
}

grilles = pommeGrille();

// recuperation des index de la pomme situer dans la grille
function indexOfPomme(){
    for (let index = 0; index < grilles.length; index++) {
        if (grilles[index].indexOf(pomme) !== -1) {
            let rowPomme = index;
            let columnPomme = grilles[index].indexOf(pomme)
            let indexOfPommes = [rowPomme,columnPomme];
            return indexOfPommes;
        }
    }
}

// recuperation des index de la pomme situer dans la grille
function indexOfSerpent(){
    for (let index = 0; index < grilles.length; index++) {
        if (grilles[index].indexOf(serpent) !== -1) {
            let rowPomme = index;
            let columnPomme = grilles[index].indexOf(serpent)
            let indexOfSerpents = [rowPomme,columnPomme];
            return indexOfSerpents;
        }
    }
}
// Définition d'une fonction à exécuter à intervalles réguliers
// function afficherMessage() {
//     console.log("Ce message s'affiche toutes les 2 secondes.");
//   }
  
//   // Utilisation de setInterval pour appeler la fonction toutes les 2 secondes (2000 millisecondes)
  
//   // Après 10 secondes, nous allons effacer l'intervalle (arrêter l'exécution de la fonction)
//   setTimeout(function() {
//     clearInterval(intervalID); // Arrête l'intervalle
//     console.log("L'intervalle a été effacé. La fonction ne sera plus appelée.");
//   }, 10000);

grilles = incrementSerpent()
function joinGrille(){
    for (let i = 0; i < grilles.length; i++) {
        console.log(grilles[i].join(' '));
    }}


joinGrille()
// const intervalID = setInterval(incrementSerpent, 2000);


        










