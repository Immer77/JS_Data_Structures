export default class Set{

    constructor(){
        this.collection = [];
    }

    /**
     * 
     * @returns size of set
     */
    size(){
        return this.collection.length;
    }

    /**
     * Checks whether or not we have the element
     * @param {Element} element 
     * @returns 
     */
    has(element){
        return this.collection.indexOf(element) !== -1;
    }

    /**
     * 
     * @returns All values in the collection
     */
    values(){
        return this.collection;
    }


    /**
     * adds element to the set (Collection)
     * @param {Element} element 
     * @returns true if element doesn't already have it in the list-
     */
    add(element){
        if(!this.has(element)){
            this.collection.push(element);
            return true;
        }
        return false;
    }

    /**
     * removes element from Set (Collection)
     * @param {Element} element 
     * @returns true if the element is in the set and is succesfully removed. False if not.
     */
    remove(element){
        if(this.has(element)){
            let index = this.collection.indexOf(element);
            this.collection.splice(index,1);
            return true;
        }
        return false;
    }
}