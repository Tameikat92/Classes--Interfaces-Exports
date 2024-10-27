import { Slasher } from "../characters/Slasher";
import { Knife } from "../weapons/Knife";
import { Survivor } from "../characters/Survivors";

describe( 'Slasher Class', ()=> {
    it( 'should reduce health of survivor when attacked', ()=>{
    const knife = new Knife();
    const michael = new Slasher( 'Michael', 100, knife);
    const survivor = new Survivor( 'Jamie' , 80);
    michael. attack(survivor);
    expect (survivor.health) .toBe(60);
    })
})