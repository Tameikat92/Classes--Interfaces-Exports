//import { Slasher, Survivors } from "../characters/Slasher";
import { Chainsaw } from "./Chainsaw";
import { Survivor } from "../characters/Survivors";
import { Slasher } from "../characters/Slasher";

// start of game
export class Game {
    start(): void {
        const chainsaw = new Chainsaw();
        const jason = new Slasher('Hash Slinging Slasher',10, chainsaw);
        const finalGirl = new Survivor('Laurie',20);

        console.log('The game begins..')
        jason.attack(finalGirl);
        finalGirl.run();
    }
}

