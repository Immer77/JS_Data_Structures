import { describe } from "mocha";
import { assert } from "chai"
import Set from "../setClass.js";

describe("4: Test suite to make sure our set Data structure is correct", () => {
    

    it('Tests that we can create a set and the length is 0', () => {
        // Arrange
        let set = new Set();
        
        // Assert
        assert.equal(set.size(),0);

    });

    it(`Check has function and makes sure it does as it is supposed to`, () => {
        // Arrange
        let set = new Set();
        let item1 = "Anne";

        // Act & Assert
        assert.equal(set.add(item1),true);
        assert.equal(set.has(item1), true);
        
    });

    it(`Remove thing from set`, () => {
        // Arrange
        let set = new Set();
        let item1 = "Anne";

        // Act & Assert
        assert.equal(set.add(item1),true);
        assert.equal(set.has(item1), true);
        assert.equal(set.remove(item1), true);
    })

})