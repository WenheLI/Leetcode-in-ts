export class ListNode {
    public val: number;
    public next: ListNode | null = null;
    constructor(val: number) {
        this.val = val;
    }

    public toString(): string {
        let s = "";
        let that: ListNode | null = this;
        while (that !== null) {
            s += `${that.val} -> `;
            that = that.next;
        }
        s += "null";
        return s;
    }

    public toArray(): number[] {
        const res: number[] = [];
        let that: ListNode | null = this;

        while (that !== null) {
            res.push(that.val);
            that = that.next;
        }

        return res;
    }
}

export function makeListNodeFromList(input: number[]): ListNode {
    const dummyHead = new ListNode(0);
    let curr = new ListNode(input[0]);
    dummyHead.next = curr;
    for (let i = 1; i < input.length; i++) {
        curr.next = new ListNode(input[i]);
        curr = curr.next;
    }
    return dummyHead.next;
}
