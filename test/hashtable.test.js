import { describe } from "mocha";
import { assert } from "chai"
import HashTable from "../HashTableClass.js";

describe("3: Test suite to make sure stack returns the correct one", () => {
    

    
    it('Test that we can create a new HashTable and add something to it', () => {
        // Arrange
        let hashTable = new HashTable();
        let navn = "Anne";
        let efternavn = "Hove"
        
        
        // Act
        hashTable.add(navn,efternavn);

        // Assert
        assert.equal(hashTable.lookup(navn),efternavn);
    

    });

    it('Tests that we can remove something from the list', () => {
        // Arrange
        let hashTable = new HashTable();
        let navn = "Anne";
        let efternavn = "Hove"
        
        // Act
        hashTable.add(navn,efternavn);
        hashTable.remove(navn);


        // Assert
        assert.equal(hashTable.lookup("Anne"),undefined);
        
    });
})