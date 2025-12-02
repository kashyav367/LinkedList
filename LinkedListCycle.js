function Node(val, next =null){
    this.val = val;
    this.next = next;
}

function haveCycle(head){
    let curr = head;
    let seenNodes = new Set();

    while(curr){
        if(seenNodes.has(curr)){
            return true;
        }
        seenNodes.add(curr);
        curr = curr.next;
    }
    return false;
}

function printLL(head){
    let curr = head;
    let output = "";

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
head.next.next.next.next.next = head.next;
console.log(haveCycle(head));  

