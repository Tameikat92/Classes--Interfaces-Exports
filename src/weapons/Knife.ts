import { Weapon } from "./Weapons";

export class Knife extends Weapon {
    constructor(){
        super('Knife',20)
    }

    use(): void {
        console.log(`The knofe is used to slash!!!!, causing ${this.damage} damage!`)
    }
}