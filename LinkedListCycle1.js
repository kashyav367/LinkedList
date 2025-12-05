// floyd's algorithm --> slow and fast pointer aproach 

function Node(value,next = null){
    this.value = value;
    this.next = next;
}

function haveCycle(head){
  if(!head) return false; // corner cases  
  let slow = head;
  let fast = head.next;

  while(slow != head){
    if(fast === null || fast.next == null){
        return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}

function printList(head){
    let curr = head;
    let output = "";
    let seen = new Set();

    while(curr){

      if(seen.has(curr)){
        output += `(${curr.value} - cycle start here )`;
        console.log(output);
        return;
      }

         output += curr.value + " -> ";
         seen.add(curr);
        curr = curr.next;
    }
    console.log(output + null);
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = head.next;

console.log(haveCycle(head));
printList(head);