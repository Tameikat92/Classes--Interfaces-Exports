import { Instrument } from "./instrument"; 
//import { Instrument } from "./instrument";

export class Guitar implements Instrument {
    strings: string[];

    constructor(strings?: string[]) {
        // Initialize strings, defaulting to standard guitar tuning if none are provided
        this.strings = strings || ["e", "a", "d", "g", "b", "e"];
    }

    play(): string {
        // Use template literal correctly
        return `Playing chords on strings: ${this.strings.join(', ')}`;
    }
}
// instance of Guitar class
// const guitar1 ={
//     strings: ["d","f","a"]
//     play(){
//         return 'lah'
//     }
// }
