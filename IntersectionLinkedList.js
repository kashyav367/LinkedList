function Node(val,next=null){
    this.val = val;
    this.next = next;
}

function intersectionLinkedList(headA,headB){

    //PUT ALL ELEMENTS OF HEADB IN SET
    let store = new Set();
    while(headB){
        store.add(headB);
        headB = headB.next;
    }

    // check headA element IS EXIST IN SET 
    while(headA){
        if(store.has(headA)) {
            return headA;
    }
    headA = headA.next;
    } 
    return null
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

// // Create common part
// let c1 = new Node(8);
// let c2 = new Node(10);
// c1.next = c2;

// // List A: 3 -> 7 -> 8 -> 10
// let a1 = new Node(3);
// let a2 = new Node(7);
// a1.next = a2;
// a2.next = c1;

// // List B: 99 -> 1 -> 8 -> 10
// let b1 = new Node(99);
// let b2 = new Node(1);
// b1.next = b2;
// b2.next = c1;

// // Print lists
// printList(a1);
// printList(b1);

// // Intersection
// let ans = intersectionLinkedList(a1, b1);
// console.log("Intersection at:", ans ? ans.val : null);

let c1 = new Node(8);
let c2 = new Node(4);
let c3 = new Node(5);
c1.next = c2;
c2.next = c3;

let a1 = new Node(4);
let a2 = new Node(1);
a1.next = a2;
a2.next = c1;

let b1 = new Node(5);
let b2= new Node(6);
let b3 = new Node(1);
b1.next = b2;
b2.next = b3;
b3.next = c1;

printList(a1);
printList(b2);

let ans = intersectionLinkedList(a1,a2);
console.log("Intersection at : " , ans ? ans.val : null );
