function ListNode(val,next=null){
    this.val = val;
    this.next = next;
}

function swapNodesInPairs(head){
    if(!head || !head.next) return head;

    let l = head;
    let r = head.next;

    l.next = swapNodesInPairs(r.next);
    r.next = l;

    return r;
}

function printList(head){
    let curr = head;
    let output = "";
    while(curr){
        output += curr.val + " -> ";
        curr = curr.next;
    }
    console.log(output + null);
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

let newHead = swapNodesInPairs(head);
printList(newHead);
