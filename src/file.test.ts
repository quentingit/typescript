import {fight, Pokemon, Priority} from "./file";



//TEST FUNCTION PRIORITY
describe("Priority", () => {
    test("Check Priority Wirh 2 Pokemons", () => {

        let Pikachu = new Pokemon("Pikachu", 35, 55, 50, 40, 50, 90 , "https://www.pokebip.com/pokedex-images/artworks/25.png");
        let Bulbizarre = new Pokemon("Bulbizarre", 45, 49, 65, 49, 65, 49,  "https://www.pokebip.com/pokedex-images/artworks/1.png");
        expect(Priority(Pikachu,Bulbizarre)).toEqual(true);
    });
});


//TEST FUNCTION FIGHT
describe("Priority", () => {
    test("Check Pokemon 2 is alive when pokemon 1 attack ", () => {

        let Pikachu = new Pokemon("Pikachu", 35, 55, 50, 40, 50, 90 , "https://www.pokebip.com/pokedex-images/artworks/25.png");
        let Bulbizarre = new Pokemon("Bulbizarre", 45, 49, 65, 49, 65, 49,  "https://www.pokebip.com/pokedex-images/artworks/1.png");
        //bool true is for pokemon 1 attack pokemon2 and false for pokemon 2 attack pokemon1
        //if return true , pokemon is not dead, if return false pokemon is dead
        expect(fight(true, Pikachu,Bulbizarre)).toEqual(true);
    });
});

describe("Priority", () => {
    test("Check Pokemon 1 is dead when pokemon 2 attack ", () => {

        let Pikachu = new Pokemon("Pikachu", 0, 55, 50, 40, 50, 90 , "https://www.pokebip.com/pokedex-images/artworks/25.png");
        let Bulbizarre = new Pokemon("Bulbizarre", 45, 49, 65, 49, 65, 49,  "https://www.pokebip.com/pokedex-images/artworks/1.png");
        //bool true is for pokemon 1 attack pokemon2 and false for pokemon 2 attack pokemon1
        //if return true , pokemon is not dead, if return false pokemon is dead
        expect(fight(false, Pikachu,Bulbizarre)).toEqual(false);
    });
});