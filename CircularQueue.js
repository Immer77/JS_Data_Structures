/**
 * To implement the circular queue two pointer variables are introduced they are front and back 
 * which is used as a reference variable to track which element is in front and back
 * Conceptually circular queue shall be implemented by doing the modulo operation (%) with the queue size and reference pointer (front/back)
 */


export default class CircularQueue{


    /**
     * Constructor "funktion"
     * @param {int} size 
     */
    constructor(size) {
        // Element array
        this.element = [];
        this.size = size

        // Length
        this.length = 0;
        this.front = 0
        this.back = -1
       }


    getFront(){
        return this.length == 0;
    }


    isEmpty(){
        return this.element.length == 0 ? true : false;
    }

    /**
     * Here in enqueue operation, variable back refers to the index of last element waiting in the queue. 
     * The modulo operation is used to find the exact index to assign the element in an array.
     * @param {Node} element 
     */
    enqueue(element) {
        if (this.length >= this.size){
            throw (new Error("Max Længde er nået"));
        } 
        this.back++
        // Dette virker fordi at så længe back er mindre end størrelsen, vil den altid returner en rest, er det 0 så "Spiser" den 0 plads.
        this.element[this.back % this.size] = element
        this.length++
    }

    /**
     * Here in dequeue operation, 
     * assign the front element waiting in a queue to temporary variable
     * and get the exact index position of the front element by doing modulo operation with array size and make it as null. 
     * Then increment the counter to point next element in the queue.
     */
    dequeue(){
        if (this.isEmpty()){
            throw (new Error("Ingen elementer i køen"));
        } 
        const value = this.getFront()
        this.element[this.front % this.size] = null
        this.front++
        this.length--
        return value
    }

    getFront() {
        if (this.isEmpty()){
            throw (new Error("No elements in the queue"));
        } 
        return this.element[this.front % this.size]
    }
    clear() {
        this.element = new Array()
        this.length = 0
        this.back = 0
        this.front = -1
    }


}