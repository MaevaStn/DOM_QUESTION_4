let montant;
let somme;
let aRendre;
let nb10;
let nb5;
let nb1;

let billet10 = document.getElementById('billet10');
let billet5 = document.getElementById('billet5');
let billet1 = document.getElementById('billet1');

billet10.innerHTML = "0";
billet5.innerHTML = "0";
billet1.innerHTML = "0";

function calcule() {
    montant = document.getElementById('montant').value;
    somme = document.getElementById('somme').value;
    aRendre = montant - somme;
    nb10 = 0;

    while(aRendre >= 10) {
        nb10 = nb10 + 1;
        aRendre = aRendre - 10;
    }
    
    nb5 = 0;

    while(aRendre >= 5) {
        nb5 = nb5 + 1;
        aRendre = aRendre -5;
    }

    billet10.innerHTML = nb10;
    billet5.innerHTML = nb5;
    billet1.innerHTML = aRendre;

    console.log(aRendre)
    console.log(montant)
    console.log(somme)
}

document.getElementById('btn').addEventListener('click', calcule, false);