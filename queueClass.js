export default class Queue{

    constructor(){
        this.collection = [];
    }

    enqueue(item){
        this.collection.push(item);
    }

    dequeue(){
        this.collection.shift();
    }

    size(){
        return this.collection.length;
    }

    isEmpty(){
        return this.collection.length === 0;
    }

    front(){
        return this.collection[0];
    }
}