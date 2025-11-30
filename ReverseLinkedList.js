function Node(value,next=null){
    this.value = value;
    this.next = next;
}

function reverseLL(head){
    let prev = null;
    let curr = head;

    while(curr){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    head = prev;
    return head;
}

function printLL(head){
    let curr = head;
    let output = "";

    while(curr){
        output += curr.value + "->"
        curr = curr.next;
    }
    console.log(output + null);
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

head = reverseLL(head);
printLL(head);