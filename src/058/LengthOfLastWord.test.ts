import {lengthOfLastWord} from "./LengthOfLastWord"

const testAndResult = [
    {
        input: "Hello World",
        output: 5
    },
];

describe("058 - Length of Last Word", () => {
    testAndResult.forEach((it, index) => {
        test(`test ${it.input}`, () => {
            const res = lengthOfLastWord(it.input);
            expect(res).toEqual(it.output);
        }); 
    })
})