function ListNode(val,next=null){
    this.val = val;
    this.next = next;
}

function swapNodesInPairs(head){

    if(!head || !head.next) return head;
    
    let dummy = new ListNode();
    dummy.next= head

    let  p = dummy;
    let c = head;
    let n = head.next;

    while(c && n){
        p.next = n;
        c.next = n.next;
        n.next = c;

        p = c;
        c = p.next;
        n = c && c.next;
    }
    return dummy.next;
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
