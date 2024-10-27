import { Survivor } from "./Survivors"
//import { Weapons } from "../weapons"
import { Weapon } from "../weapons/Weapons";

export class Slasher {
    constructor(public slasherName: string, public health: number , public weapon: Weapon){}

    attack(target: Survivor) {
        console.log(`${this.slasherName} attacks ${target.survivorName} with ${this.weapon.name}`);
        target.takeDamage(this.weapon.damage);
    }
    takeDamageSlasher(amount:number): void {
        this.health -= amount
        console.log(`${this.slasherName} takes ${amount} damage! Health is now ${this.health}`);
    }
}