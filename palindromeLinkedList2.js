function Node(val,next=null){
    this.val = val;
    this.next = next;
}

function palindrome(head){
    let arr = [];
    let curr = head;

    while(curr){
        arr.push(curr.val);
        curr = curr.next;
    }

    let left = 0;
    let right = arr.length-1;

    while(left < right){
        if(arr[left] !== arr[right]) {
        return false;
        } 

            left++;
            right--;   
    }
    return true;
};


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