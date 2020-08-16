class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count++
        return this.count - 1
    }

    // remove top item from stack
    // return undefine if stack is empty
    pop() {
        if(this.count == 0) return undefined

        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // check top element in stack
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    isEmpty() {
        console.log(`Stack contains ${this.count} element`)
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

    // Get stack size
    size() {
        console.log(`Stack size is ${this.count}`)
        return this.count-1
    }

    // print elements in stack
    print() {
        let str = ''
        for (let i=0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    clear() {
        console.log(`this.count is now ${this.count}`)
        this.items = []
        this.count = this.items.length
        console.log('Stack cleared...')
        console.log(`this.count is now ${this.count}`)
        return this.items
    }

}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)

stack.pop()
stack.pop()
stack.size()
stack.isEmpty()
stack.peek()
// stack.pop()
// console.log(stack.pop())
stack.push(300)

stack.isEmpty()
stack.peek()
console.log(`stack contains these elements ${stack.print()}`)
stack.clear()
stack.pop()
stack.pop()
stack.isEmpty()