function ListNode(val, next=null){
    this.val = val;
    this.next = next;
}

function mergeTwoSortedList(l1,l2){
    let start = new ListNode();
    let curr = start;

    while(l1 && l2){
        if(l1.val < l2.val){
            curr.next = l1;
            l1 =l1.next;
        }
        else{
            curr.next =l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

      if(!l1){
            curr.next = l2;
        }
        if(!l2){
            curr.next = l1;
        }
    return start.next;
}

function printList(head){
    let output = "";
    let curr = head;

    while(curr){
        output += curr.val + " -> "
        curr = curr.next;
    }
    console.log(output + null);
}

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

let newNode = mergeTwoSortedList(l1,l2);
printList(newNode);