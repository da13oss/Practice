//Node Class
//First, I need a Node class for the SLL.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
//Add Front
//Next, add the addFront method to the SLL class.

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this.head;
    }
}

const SLL1 = new SLL();
console.log(SLL1.addFront(18)); // Node { data: 18, next: null }
console.log(SLL1.addFront(5));  // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)); // Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }
//This method creates a new node, sets it as the head, and returns the new head node.

//Remove Front
//Now, i'll add the removeFront method to the SLL class.

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this.head;
    }

    removeFront() {
        if (!this.head) {
            return null;
        }
        const removedNode = this.head;
        this.head = this.head.next;
        return this.head;
    }
}

const SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);
console.log(SLL1.removeFront()); // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.removeFront()); // Node { data: 18, next: null }
//This method removes the head node and returns the new head node.

//Front
//Finally, i'll add the front method to the SLL class.

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this.head;
    }

    removeFront() {
        if (!this.head) {
            return null;
        }
        const removedNode = this.head;
        this.head = this.head.next;
        return this.head;
    }

    front() {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }
}

const SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);
console.log(SLL1.front()); // 73
SLL1.removeFront();
console.log(SLL1.front()); // 5
SLL1.removeFront();
console.log(SLL1.front()); // 18
SLL1.removeFront();
console.log(SLL1.front()); // null
//This method returns the value at the head of the list, or null if the list is empty.

