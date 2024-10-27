import { Guitar } from "./Guitar";

test('Guitar plays a sound with default string', () => {
const guitar2 = new Guitar();
expect(guitar2.strings).toEqual(['e','a',,'d','g','b','e']);
expect(guitar2.play()).toBe('Playing chords on strings: e,a,d,g,b,e');
});

test('Guitar plays sound with diffrent tuning',()=>{
    const customTuning = ['d,a,d,g,b,e'];
    const guitar2 = new Guitar(customTuning);
    expect(guitar2.play()).toBe('Playing chords on strings: d,a,d,g,b');
});