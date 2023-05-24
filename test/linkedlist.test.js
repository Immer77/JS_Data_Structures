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

    it('Tests that we can remove something from the list', () => {
        // Arrange
        let linkedList = new LinkedList();
        let item1 = "Anne";
        
        // Act
        linkedList.add(item1);
        linkedList.remove(item1);


        // Assert
        assert.equal(linkedList.size(),0);
        
    });

    it(`Testing to see that the linkedlist is empty`, () => {
        // Arrange
        let linkedList = new LinkedList();
        let item1 = "Anne";

        // Act & Assert
        assert.equal(linkedList.isEmpty(), true);

        linkedList.add(item1);

        assert.equal(linkedList.isEmpty(),false);
        
    });

    it(`Finding index of element`, () => {
        // Arrange
        let linkedList = new LinkedList();
        let item1 = "Anne";
        let item2 = "Peter";
        let item3 = "Marianne";
        let item4 = "Jakob";

        linkedList.add(item1);
        linkedList.add(item2);
        linkedList.add(item3);
        linkedList.add(item4);

        assert.equal(linkedList.indexOf(item2),1);

    });

    it(`Testing to find the element at index location`, () => {
        // Arrange
        let linkedList = new LinkedList();
        let item1 = "Anne";
        let item2 = "Peter";
        let item3 = "Marianne";
        let item4 = "Jakob";

        linkedList.add(item1);
        linkedList.add(item2);
        linkedList.add(item3);
        linkedList.add(item4);

        assert.equal(linkedList.elementAt(1),item2);

    });

    it(`Add at specific location`, () => {
        // Arrange
        let linkedList = new LinkedList();
        let item1 = "Anne";
        let item2 = "Peter";
        let item3 = "Marianne";
        let item4 = "Jakob";

        linkedList.add(item1);
        linkedList.add(item2);
        linkedList.add(item3);
        linkedList.addAt(item4,1);

        assert.equal(linkedList.indexOf(item4),1);
    });

    it(`Remove at specific location`, () => {
        let linkedList = new LinkedList();
        let item1 = "Anne";
        let item2 = "Peter";
        let item3 = "Marianne";
        

        linkedList.add(item1);
        linkedList.add(item2);
        linkedList.add(item3);
        linkedList.removeAt(1);

        assert.equal(linkedList.indexOf(item3),1);
    })

})