import { describe } from "mocha";
import { assert } from "chai"
import BinarySearchTree from "../BinarySearchTree.js";

describe("3: Test suite to make sure stack returns the correct one", () => {
    let BST = new BinarySearchTree();

    before(() => {
        
        // create an object for the BinarySearchTree
        
        
        // Inserting nodes to the BinarySearchTree
        BST.insert(15);
        BST.insert(25);
        BST.insert(10);
        BST.insert(7);
        BST.insert(22);
        BST.insert(17);
        BST.insert(13);
        BST.insert(5);
        BST.insert(9);
        BST.insert(27);
                                
        //          15
        //         /  \
        //        10   25
        //       / \   / \
        //      7  13 22  27
        //     / \    /
        //    5   9  17
    });
    
    it('Test that we can find minimun node which is 5', () => {
        // Arrange
        let expectedResult = 5;
        let root = BST.getRootNode();

        // Act
        let actualResult = BST.findMinNode(root);

        // Assert
        assert.equal(actualResult.data, expectedResult);

    });

    it('Test that we can find minimun node which is 5', () => {
        // Arrange
        let root = BST.getRootNode();
        
        // Act
        BST.inorder(root);

        // Act & Assert
        assert.deepEqual(BST.inOrder, [5, 7, 9, 10, 13, 15, 17, 22, 25, 27]);

    });

    it('Test that we can find minimun node which is 5', () => {
        // Arrange
        let root = BST.getRootNode();
        
        // Act
        BST.postorder(root);

        // Act & Assert
        assert.deepEqual(BST.postOrder, [5, 9, 7, 13, 10, 17, 22, 27, 25, 15]);

    });

    it('Test that we can find minimun node which is 5', () => {
        // Arrange
        let root = BST.getRootNode();
        
        // Act
        BST.preorder(root);

        // Act & Assert
        assert.deepEqual(BST.preOrder, [15, 10, 7, 5, 9, 13, 25, 22, 17, 27]);
    });

    

})