export default class LinkedList{

    constructor(){
        this.length = 0;
        this.head = null;
    }

    size(){
        return this.length;
    }

    getHead(){
        return this.head;
    }

    add(element){
        // Initialiserer en ny node 
        let node = new Node(element);

        // Hvis head er null så sætter vi bare head til node efter
        if(this.head === null){
            this.head = node;

        // Hvis ikke så ved vi at der er flere node i vores linked list og vi vil så begynde at traverse igennem indtil vi finder pladsen.
        }else{

            // Starter fra starten
            let currentNode = head;
            // Så længe der i vores kæde stadig er en next så bliver vi ved indtil vi rammer en hvor next === null
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            // Når vi har det sætter vi dens next til at være den node vi lige har oprettet
            currentNode.next = node;

        }
        // Og tilføjer til længden på den
        this.length++;

    }
    
}

class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}