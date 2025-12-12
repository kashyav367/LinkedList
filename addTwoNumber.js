function ListNode(val,next = null){
    this.val = val;
    this.next = next;
}

function addTwoNumber(l1,l2){

    let ans = new ListNode();
    ansHead = ans;
    let carry = 0;
    while(l1 || l2 || carry){
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        let newNode = new ListNode(digit);
        ans.next = newNode;
        ans = ans.next;
        
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
     return ansHead.next;
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

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

let newNode = addTwoNumber(l1, l2);
printList(newNode);
