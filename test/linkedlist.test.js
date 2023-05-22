import { describe } from "mocha";
import { assert } from "chai"
import LinkedList from "../linkedListClass.js";

describe("3: Test suite to make sure stack returns the correct one", () => {
    

    
    it('Test that we can create a new LinkedList and add something to it', () => {
        // Arrange
        let linkedList = new LinkedList();
        let item1 = "Anne";
        
        // Act
        linkedList.add(item1);


        // Assert
        assert.equal(linkedList.getHead().element,item1);
        assert.equal(linkedList.size(), 1);

    });

    it('Tests that we can dequeue something onto the stack', () => {
        // Arrange
        let linkedList = new LinkedList();
        let item1 = "Anne";
        
        // Act
        linkedList.add(item1);
        linkedList.remove(item1);


        // Assert
        assert.equal(linkedList.size(),0);
        

    });

    
    it('Tests that we can see whats in the front of queue', () => {
        // Arrange
        let linkedList = new LinkedList();
        let item1 = "Anne";
        
        // Act
        linkedList.enqueue(item1);
        

        // Assert
        assert.equal(linkedList.front(), item1);
        assert.equal(linkedList.isEmpty(), false);

    });
})