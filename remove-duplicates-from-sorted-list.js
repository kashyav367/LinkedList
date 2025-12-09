function ListNode(val,next=null){
    this.val = val;
    this.next = next;
}

function removeDuplicateFromSortedList(head,val){
    let curr = head;


    
    while(curr && curr.next){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next;
        }
        else{
            curr = curr.next;
        }
    }
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

let head = new ListNode(1)
head.next= new ListNode(1)
head.next.next = new ListNode(2)


let newHead = removeDuplicateFromSortedList(head);
printList(newHead);
