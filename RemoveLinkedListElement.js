function ListNode(val,next=null){
    this.val = val;
    this.next = next;
}

function removeLinkedList(head,val){
    let sentinel = new ListNode();
    sentinel.next = head;

    let prev = sentinel;
    while(prev && prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next;
        }
        else{
            prev = prev.next;
        }
    }
    return sentinel.next;
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

let head = new ListNode(1)
head.next= new ListNode(2)
head.next.next = new ListNode(6)  
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(4)
head.next.next.next.next.next = new ListNode(5)
head.next.next.next.next.next.next = new ListNode(6);

let newHead = removeLinkedList(head, 6);
printList(newHead);
