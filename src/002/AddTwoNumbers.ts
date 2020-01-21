import { ListNode } from "../common/ListNode";

export const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode => {
    const dummyHead = new ListNode(-1);
    let cal = new ListNode(0);
    dummyHead.next = cal;
    while (l1 !== null && l2 !== null) {
        cal.val = cal.val + l1.val + l2.val;
        cal.next = new ListNode(Math.floor(cal.val / 10));
        cal.val = cal.val % 10;
        cal = cal.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while (l1 !== null) {
        cal.val += l1.val;
        cal.next = new ListNode(Math.floor(cal.val / 10));
        cal.val %= 10;
        cal = cal.next;
        l1 = l1.next;
    }
    while (l2 !== null) {
        cal.val += l2.val;
        cal.next = new ListNode(Math.floor(cal.val / 10));
        cal.val %= 10;
        cal = cal.next;
        l2 = l2.next;
    }
    let iter: ListNode | null = dummyHead.next;
    let pIter = dummyHead.next;
    while(iter !== null) {
        pIter = iter;
        iter = iter.next;
        if (iter !== null && iter.val === 0 && iter.next === null) {
            pIter.next = null;
        }
    }
    return dummyHead.next;
}