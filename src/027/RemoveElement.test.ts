import {removeElement} from './RemoveElement';

const testAndResult = [
    {
        input: [[3, 2, 2, 3], 3],
        output: 2
    },
    {
        input: [[0,1,2,2,3,0,4,2], 2],
        output: 5
    },
];

describe("027 - Remove Element", () => {
    testAndResult.forEach((it, index) => {
        test(`test ${it.input}`, () => {
            const res = removeElement(it.input[0] as number[], it.input[1] as number);
            expect(res).toEqual(it.output);
        }); 
    })
})