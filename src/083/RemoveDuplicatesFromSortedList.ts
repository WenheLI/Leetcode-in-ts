import { ListNode } from "../common/ListNode";

export function deleteDuplicates(head: ListNode | null) {
    let ret: ListNode | null = null;
    
    if (head !== null) {
        ret = new ListNode(head.val);
    } else {
        return ret;
    }
    const curr = ret;
    while (head !== null) {
        if (head.val !== ret.val) {
            ret.next  = new ListNode(head.val);
            ret = ret.next;
        }
        head = head.next;
    }

    return curr;
}