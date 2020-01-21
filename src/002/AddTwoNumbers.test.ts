import {addTwoNumbers} from './AddTwoNumbers';
import { makeListNodeFromList } from '../common/ListNode';

const testAndResult = [
    {
        input: [makeListNodeFromList([2, 4, 3]), makeListNodeFromList([5, 6, 9])],
        output: [7, 0, 3, 1]
    },
    {
        input: [makeListNodeFromList([2, 4, 3]), makeListNodeFromList([5, 6, 2])],
        output: [7, 0, 6]
    },
    {
        input: [makeListNodeFromList([9, 1, 6]), makeListNodeFromList([0])],
        output: [9, 1, 6]
    }
];

describe("002 - Add two numbers", () => {
    testAndResult.forEach((it, index) => {
        test(`test ${it.input}`, () => {
            const res = addTwoNumbers(it.input[0], it.input[1]).toArray();
            expect(res).toEqual(it.output);
        }); 
    })
})