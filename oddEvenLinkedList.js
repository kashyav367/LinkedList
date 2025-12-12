function Node(val,next = null){
    this.val =val;
    this.next = next;
}

function oddEvenLinked(head){

    if(!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenStart = even;

    while(odd.next && even.next){
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
    }
    odd.next = evenStart;
    return head;
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

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let newNode = oddEvenLinked(head);
printList(head);