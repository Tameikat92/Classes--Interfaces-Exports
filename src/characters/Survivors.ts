export class Survivor {
    constructor(public survivorName: string, public health: number){
// no need for body
    }

    takeDamage(amount:number): void {
        this.health -= amount
        console.log(`${this.survivorName}takes ${amount} damage! Health is now ${this.health}`);
    }

    run(): void {
        console.log(`${this.survivorName}tries to run away}`);
    }
     superPower(): void{
        console.log(`I'm a survivor!!!`);
     }
}

