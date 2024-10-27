import { Weapon } from "./Weapons";

export class Chainsaw extends Weapon {

    constructor(){
        super('Chainsaw',20)
    }

    use(): void{
        console.log(`The chainsaw is used to hawk!!!!, causing ${this.damage} damage!`)
    }
}