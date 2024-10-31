//Node Class
//We'll use the Node class from our previous example:


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
//SLL Class with display Method
//Now, I added the display method to our SLL class:


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

    display() {
        let runner = this.head;
        let result = "";
        while (runner) {
            result += runner.data + (runner.next ? ", " : "");
            runner = runner.next;
        }
        return result;
    }
}

const SLL1 = new SLL();
SLL1.addFront(76);
SLL1.addFront(2);
console.log(SLL1.display()); // "2, 76"
SLL1.addFront(11.41);
console.log(SLL1.display()); // "11.41, 2, 76"
//The display method uses a while loop with a runner to traverse the list and concatenate each node's value to a result string, 
//separated by commas. 
//This creates a string representation of the list, similar to how you'd like console.log(myList) to work.