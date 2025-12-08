function ListNode(val, next=null){
    this.val = val;
    this.next = next;
}

function removeNthNodeFromEnd(head,n){
   let sentinel = new ListNode();
   sentinel.next = head;

   let length = 0;
   while(head){
    head = head.next;
    length++;
   }

   let prevPos = length-n;
   let prev = sentinel;

   for(let i=0 ; i<prevPos ; i++){
    prev = prev.next;
   }
   prev.next = prev.next.next;
   return sentinel.next;
}

function printList(head){
    let output = "";
    let curr = head;
    while(curr){
        output += curr.val + " -> ";
        curr = curr.next;
    }
    console.log(output + null)
}

let head = new ListNode(1)
head.next= new ListNode(2)
head.next.next = new ListNode(3)  
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)


let newHead = removeNthNodeFromEnd(head, 2);
printList(newHead);
