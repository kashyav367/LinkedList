function ListNode(val , next = null){
    this.val = val;
    this.next = next;
}

function rotateList(head,k){

    if(!head || !head.next) return head;

    let length = 0;
    let curr = head;

    while(curr){
        curr = curr.next;
        length++;
    }

    k = k % length;

    let s = head;
    let f = head;

    for(let i=0 ; i<k ; i++){
        f = f.next;
    }

    while(f.next){
        s = s.next;
        f = f.next;
    }
    f.next = head;
    let newHead = s.next;

    s.next = null;

    return newHead;
}

function printList(head){
    let output = "";
    let curr = head;

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

let newHead = rotateList(head,2);
printList(newHead);
