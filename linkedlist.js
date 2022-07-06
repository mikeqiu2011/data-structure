class Linkedlist{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value){
        const newNode = {
            value: value,
            next: this.head
        }
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
// myLinkedList.prepend(1)
console.log(myLinkedList);