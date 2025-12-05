function Node(val,next=null){
    this.val = val;
    this.next = next;
}

function middleNode(head){
    let slow = head;
    let fast = head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }


function reverseNode(head){
    let prev = null;
    let curr = head;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev =curr;
        curr = temp;
    }
    return prev;
}

function palindrome(head){
    if(!head || !head.next) return true;

    let mid = middleNode(head);

    let secondList = reverseNode(mid);

    let firstList = head;

while (secondList) {
        if (firstList.val !== secondList.val) {
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;
    }

    return true;
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

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);

printList(head);
console.log("Is Palindrome?", palindrome(head));