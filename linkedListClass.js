
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
        if(this.head == null){
            this.head = node;

        // Hvis ikke så ved vi at der er flere node i vores linked list og vi vil så begynde at traverse igennem indtil vi finder pladsen.
        }else{

            // Starter fra starten
            let currentNode = this.head;
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

    remove(element){

        let currentnode = this.head;
        let previousNode;

        if(currentnode.element === element){
            this.head = currentnode.next;
        }else{
            // Så længe vi ikke har fundet den rigtige node
            while(currentnode !== element){
                previousNode = currentnode;
                currentnode = currentnode.next;
            }
            // Sætter den foregående node til den node der skal fjernes next så man laver lige et smut forbi den node der skal fjernes
            previousNode.next = currentnode.next;
        }

        this.length--;
    }

    isEmpty(){
        return this.length === 0;
    }

    indexOf(element){
        // Sætter altid currentNode til head fordi at vi vil gøre det fra starten af.
        let currentNode = this.head;
        // Starter med index til -1 eftersom vi inkrementere den til at starte med og vi gerne vil starte på index 0
        let index = -1;
        while(currentNode){
            index++;
            // Hvis den node's element vi har nu er det element vi leder efter returnerer vi index på det
            if(currentNode.element === element){
                return index;
            }
            // Ellers fortsætter vi
            currentNode = currentNode.next;
        }
        // Finder vi ingen returner vi -1
        return -1;
    }

    // Her vil vi gerne finde elementet givet ud fra et index
    elementAt(index){
        // Sætter currentNode = head da vi skal starte derfra
        let currentNode = this.head;
        // En counter der sikrer at vi bliver ved indtil vi rammer det indeks der er givet.
        let count = 0;
        while(count < index){
            count++;

            currentNode = currentNode.next;
        }
        // Når det index så er ramt returnerer vi elementet vi er nået til.
        return currentNode.element;
    }


    addAt(element, index){
        // Laver en ny node
        let node = new Node(element);

        // SAmme som i alle metoder sætter vi nuværende node til at være head
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        // Vi kan ikke tilføje til en plads der er out of bounds fra vores linkedlist
        if(index > this.length){
            return false;
        }
        // Hvis vi gerne vil tilføje til plads 0 gør vi bare dette med det samme
        if(index === 0){
            node.next = currentNode;
            this.head = node;
        }else{
            // Ellers kører vi igennem indtil vi rammer det sted vi ønsker
            while(currentIndex < index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // Så Sætter vi vores node ind på den plads, og sætter den foregående previousNode.next til den node vi lige har oprettet
            node.next = currentNode;
            previousNode.next = node;
        }
        this.length++;
    }

    removeAt(index){
        // Sætter currentnode til head som er vores startpoint
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        // Hvis det index vi får er under 0 eller over lægnden af vores linkedlist, returner vi null eftersom vi ved at vi ikke har nogen værdier
        if(index < 0 || index > this.length){
            return null;
        }

        // Hvis index er 0 vil det sige at vi gerne vil fjerne den første node, og derfor bliver head sat til den næste
        if(index === 0){
            this.head = currentNode.next;
        }else{
            while(currentIndex < index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // Når vi endelig er kommet op til der hvor den skal slettes, sætter vi den previousNode.next til currentnode.next og derfor fjerne currentnode
            previousNode.next = currentNode.next;
        }
        this.length--
        // Her returnerer vi elementet.
        return currentNode.element;
    }
    
}

/**
 * Vores node klasse som tager et element og har en next.
 */
class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}