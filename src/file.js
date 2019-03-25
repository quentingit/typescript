"use strict";
exports.__esModule = true;
//LA CLASSE POKEMON
var Pokemon = /** @class */ (function () {
    function Pokemon(name, pv, attaque, attaqueSpe, defense, defenseSpe, vitesse, url) {
        this.name = name;
        this.pv = pv;
        this.attaque = attaque;
        this.attaqueSpe = attaqueSpe;
        this.defense = defense;
        this.defenseSpe = defenseSpe;
        this.vitesse = vitesse;
        this.url = url;
        this.name = name;
        this.pv = pv;
        this.attaque = attaque;
        this.attaqueSpe = attaqueSpe;
        this.defense = defense;
        this.defenseSpe = defenseSpe;
        this.vitesse = vitesse;
        this.url = url;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//FONCTION BATTLE ENTRE DEUX POKEMON ET SELON LA
function fight(bool, poke1, poke2) {
    //ON REGARDE QUELLE EST LE PREMIER POKEMON QUI VA COMBATTRE
    if (bool == true) {
        poke2.pv = poke2.pv - (poke1.attaque - poke2.defense);
        if (poke2.pv <= 0) {
            setTimeout(function () {
                document.getElementById('poke2').innerHTML = " 0 PV<br>";
                document.getElementById('etat').innerHTML = "le pokemon " + poke2.name + "  <b> a Perdu ! </b><br>";
            }, 1000);
            return false;
        }
        else {
            setTimeout(function () {
                document.getElementById('poke2').innerHTML = poke2.pv + "PV<br>";
                document.getElementById('etat').innerHTML = "le pokemon " + poke2.name + " perd <b>" + (poke1.attaque - poke2.defense) + " degats</b> <br>";
            }, 1000);
            return true;
        }
    }
    else {
        poke1.pv = poke1.pv - (poke2.attaque - poke1.defense);
        if (poke1.pv <= 0) {
            setTimeout(function () {
                document.getElementById('poke1').innerHTML = "0 PV<br>";
                document.getElementById('etat').innerHTML = "le pokemon " + poke1.name + "  <b> a Perdu ! </b><br>";
            }, 1000);
            return false;
        }
        else {
            setTimeout(function () {
                document.getElementById('poke1').innerHTML = poke1.pv + " PV<br>";
                document.getElementById('etat').innerHTML = "le pokemon " + poke1.name + " perd <b>" + (poke2.attaque - poke1.defense) + " degats </b><br>";
            }, 1000);
            return true;
        }
    }
}
exports.fight = fight;
//POUR CONNAITRE L'ORDRE DE COMBAT
function Priority(poke1, poke2) {
    if (poke1.vitesse > poke2.vitesse)
        return true;
    else
        return false;
}
exports.Priority = Priority;
function Initier(poke1, poke2) {
    document.getElementById('poke1img').innerHTML = '<img src="' + Pikachu.url + '" width="150" class="rounded mx-auto d-block"/>';
    document.getElementById('poke2img').innerHTML = '<img src="' + Bulbizarre.url + '" width="150" class="rounded mx-auto d-block"/>';
    document.getElementById('poke1').innerHTML = poke1.pv + "PV<br>";
    document.getElementById('poke2').innerHTML = poke2.pv + "PV<br>";
    document.getElementById('etat').innerHTML = "debut du combat<br>";
}
function alter(bool) {
    if (bool == true) {
        return false;
    }
    else {
        return true;
    }
}
function Battle(poke1, poke2) {
    //INITIALISATION DES DONNEES POKEMON
    Initier(poke1, poke2);
    //ON FAIS APPEL A LA PRIORITE ET PREMEIR COMBAT
    var boolstart = Priority(poke1, poke2);
    if (!fight(boolstart, poke1, poke2))
        return;
    //BOUCLE DE COMBAT JUSQUA MORT SEN SUIVE AVEC ACTION TOUTES LES 3SECONDES
    (function myLoop(i, bool) {
        setTimeout(function () {
            if (--i) {
                //APPEL DE LA FONCTION FIGHT
                if (!fight(bool, poke1, poke2))
                    return;
                //ALTERNER LES COMBATS
                myLoop(i, alter(bool));
            } //  decrement i and call myLoop again if i > 0
        }, 3000);
    })(100);
}
/////////////////////////////////////////////////
////////////DEBUT PROGRAMME//////////////////////
/////////////////////////////////////////////////
//ON CREE NOS DEUX POKEMON
var Pikachu = new Pokemon("Pikachu", 35, 55, 50, 40, 50, 90, "https://www.pokebip.com/pokedex-images/artworks/25.png");
var Bulbizarre = new Pokemon("Bulbizarre", 45, 49, 65, 49, 65, 49, "https://www.pokebip.com/pokedex-images/artworks/1.png");
//ON LES FAIS COMBATTRE
setTimeout(function () {
    Battle(Pikachu, Bulbizarre);
}, 1000);
