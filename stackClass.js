
export default class Stack {

    constructor(){
        this.storage = {}
        this.count = 0;
    }

    push(item){
        this.storage[this.count] = item;
        this.count++;
    }

    pop(){
        if (this.count === 0){
            return undefined;
        }
        // Setting the count -- as to get to the spot where we last pushed something onto the stack
        this.count--;
        // To see what item was popped we added this to be able to return before we delete
        let poppedItem = this.storage[this.count];
        // Deleting the item
        delete this.storage[this.count];
        return poppedItem;
    }

    peek(){
        return this.storage[this.count - 1];
    }

    size(){
        return this.count;
    }
}

