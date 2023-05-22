import { describe } from "mocha";
import { assert } from "chai"
import Stack from "../stackClass.js";

describe("1: Test suite to make sure stack returns the correct one", () => {
    

    
    it('Tests that we can push something onto the stack', () => {
        // Arrange
        let stack = new Stack();
        let item1 = "Anne";
        
        // Act
        stack.push(item1);


        // Assert
        assert.equal(stack.size(),1);

    });

    it('Tests that we can pop the item we just added', () => {
        // Arrange
        let stack = new Stack();
        let item1 = "Anne";
        
        // Act & Assert
        stack.push(item1);

        assert.equal(stack.pop(), item1);
        assert.equal(stack.size(), 0);
        
    })

    
    it('Tests that we can peek item we just added', () => {
        // Arrange
        let stack = new Stack();
        let item1 = "Anne";
        
        // Act & Assert
        stack.push(item1);

        assert.equal(stack.peek(), item1);
    })
})