import { describe } from "mocha";
import { assert } from "chai"
import Queue from "../queueClass.js";

describe("2: Test suite to make sure stack returns the correct one", () => {
    

    
    it('Test that we can create a new queue and add something to it', () => {
        // Arrange
        let queue = new Queue();
        let item1 = "Anne";
        
        // Act
        queue.enqueue(item1);


        // Assert
        assert.equal(queue.size(),1);
        assert.equal(queue.isEmpty(), false);

    });

    it('Tests that we can dequeue something onto the stack', () => {
        // Arrange
        let queue = new Queue();
        let item1 = "Anne";
        
        // Act
        queue.enqueue(item1);
        queue.dequeue();


        // Assert
        assert.equal(queue.size(),0);
        assert.equal(queue.isEmpty(), true);

    });

    
    it('Tests that we can see whats in the front of queue', () => {
        // Arrange
        let queue = new Queue();
        let item1 = "Anne";
        
        // Act
        queue.enqueue(item1);
        

        // Assert
        assert.equal(queue.front(), item1);
        assert.equal(queue.isEmpty(), false);

    });
})