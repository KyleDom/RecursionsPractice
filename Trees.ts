class TreeNode {
    public data : number;
    public left : TreeNode | null;
    public right : TreeNode | null;

    constructor(data: number){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    public root : TreeNode | null;
    constructor(root?: TreeNode){
        this.root = root || null
    }
    public insert (node: TreeNode | null = this.root, value: number): TreeNode{
        if (node === null){
            const head = new TreeNode(value)
            return head
        }else {
            if(value < node.data){
                node.left = this.insert(node.left,value)
            }else {
                node.right = this.insert(node.right,value)
            }
            return node
        }
    }
    public inOrder(node: TreeNode | null){

        if (node === null){
            return
        }else {
            this.inOrder(node.left) //i-traverse or check tanan kung may left subtree ang node
            console.log(node.data) //display ang node after visit 
            this.inOrder(node.right) //check kung may ara right subtree ang node
        }
}
    public preOrder(node: TreeNode | null){

    if (node === null){
        return
    }else {
        console.log(node.data) //display ang node after visit 
        this.preOrder(node.left) //i-traverse or check tanan kung may left subtree ang node
        this.preOrder(node.right) //check kung may ara right subtree ang node
    }
}
    public postOrder(node: TreeNode | null){

    if (node === null){
        return
    }else {
        this.postOrder(node.left) //i-traverse or check tanan kung may left subtree ang node
        this.postOrder(node.right) //check kung may ara right subtree ang node
        console.log(node.data) //display ang node after visit 
    }
}
}

let rootNode = new TreeNode(1)
rootNode.left = new TreeNode(2)
rootNode.right = new TreeNode(3)
rootNode.left.left = new TreeNode(4)
rootNode.left.right = new TreeNode(5)

let rootNode1 = new TreeNode(40)


const Btree = new BinaryTree(rootNode1)
Btree.insert(rootNode1, 30)
Btree.insert(rootNode1, 50)
Btree.insert(rootNode1.left, 25)
Btree.insert(rootNode1.left, 35)


console.log("Inorder traversal (left, root, right)")
console.log(Btree.inOrder(rootNode1))
console.log("Preorder traversal (root, left, right)")
console.log(Btree.preOrder(rootNode1))
console.log("Post-order traversal (left, right, root)")
console.log(Btree.postOrder(rootNode1))