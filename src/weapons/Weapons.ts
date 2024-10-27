export class Weapon {

    name:string;
    damage: number;

    constructor(name: string,  damage:number){
        this.name = name;
        this.damage = damage;
    }
    use(): void {
        console.log(`${this.name} is used, causing ${this.damage} damage`);
    }
}

export class WeaponPublicPractice {

   // hurts readability

    constructor(public name: string, public damage:number){
       // no need for a body
    }
    use(): void {
        console.log(`$${this.name} is used, causing ${this.damage} damage`);
    }
}