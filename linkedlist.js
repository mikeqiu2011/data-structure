class Node{
    constructor(value, next=null){
        this.value = value
        this.next = next
    }
    setNext(next){
        this.next = next
    }
}

class Linkedlist{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value){
        const newNode = new Node(value)
        newNode.setNext(this.head)
        this.head = newNode
        this.length++
        return this
    }
}

const myLinkedList = new Linkedlist(5)
myLinkedList.append(10)
myLinkedList.append(15)
// myLinkedList.append(20)

myLinkedList.prepend(2)
myLinkedList.prepend(1)
console.log(myLinkedList);