function Node(val){
    this.val = val;
    this.next = null;
}

function MyLinkedList(){
    this.head = null;
    this.size = 0;
}

MyLinkedList.prototype.addAtHead = function(val){
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

MyLinkedList.prototype.addAtTail = function(val){
    let newNode = new Node(val);

    if(this.head === null){
        this.head = newNode;
    } else {
        let curr = this.head;
        while(curr.next !== null){
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.size++;
}

MyLinkedList.prototype.addAtIndex = function(index,val){
    if(index < 0 || index > this.size) return;

    if(index === 0){
        this.addAtHead(val);
        return;
    }
    if(index === this.size){
        this.addAtTail(val);
        return;
    }

    let newNode = new Node(val);
    let curr = this.head;

    for(let i = 0; i < index - 1; i++){
        curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
}

MyLinkedList.prototype.get = function(index){
    if(index < 0 || index >= this.size) return -1;

    let curr = this.head;
    for(let i = 0; i < index; i++){
        curr = curr.next;
    }
    return curr.val;
}

MyLinkedList.prototype.deleteAtIndex = function(index){
    if(index < 0 || index >= this.size) return;

    if(index === 0){
        this.head = this.head.next;
    } else {
        let curr = this.head;
        for(let i = 0; i < index - 1; i++){
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
    this.size--;
}

function printList(list){

    let curr = list.head;
    let result = "";

    while(curr !== null){
      result += curr.val + " -> ";
      curr = curr.next;
    }
    console.log(result+"null");
}

let list = new MyLinkedList();

list.addAtHead(10);
list.addAtHead(5);
list.addAtTail(20);
list.addAtIndex(1,15);

printList(list);

console.log("value at index 2 :" , list.get(2));

list.deleteAtIndex(1);

printList(list); 