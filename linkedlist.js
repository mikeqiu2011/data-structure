class Node{
    constructor(value, next=null){
        this.value = value
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
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    insert(index, value){
        if (index >= this.length){
            return this.append(value)
        }

        if (index <= 0){
            return this.prepend(value)
        }

        const newNode = new Node(value)

        const leader = this.traverseToIndex(index-1)
        console.log(leader);
        newNode.next = leader.next
        leader.next = newNode
        this.length++

        return this
    }

    traverseToIndex(index){
        let currentNode = this.head
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
            
        }
        return currentNode
    }

    printList(){
        const array = []
        let cursor = this.head
        while(cursor !== null){
            // console.log(cursor.value);
            array.push(cursor.value)
            cursor = cursor.next
        }
        return array
    }





    reverse(){
        if(this.length === 1){
            return this
        }

        let first = this.head
        this.tail = this.head
        let second = first.next
        first.next = null
        
        while(second){
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head = first

        return this
    }
}

const myLinkedList = new Linkedlist(5)
myLinkedList.append(10)
myLinkedList.append(15)

console.log(myLinkedList.printList());

myLinkedList.insert(2, 12)
console.log(myLinkedList.printList());
// console.log(myLinkedList);

console.log(myLinkedList.reverse().printList());