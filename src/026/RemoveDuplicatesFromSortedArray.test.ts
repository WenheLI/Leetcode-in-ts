import {removeDuplicates} from './RemoveDuplicatesFromSortedArray';

const testAndResult = [
    {
        input: [1, 1, 2],
        output: 2
    },
];

describe("026 - Remove Duplicates", () => {
    testAndResult.forEach((it, index) => {
        test(`test ${it.input}`, () => {
            const res = removeDuplicates(it.input);
            expect(res).toEqual(it.output);
        }); 
    })
})