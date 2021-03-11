class Node {
    constructor(element,parentNode) {
      this.element=element;
      this.parentNode=parentNode
    }
  }
  
  class BST {
    constructor() {
      this.root=null;
      this.size=0;
    }
    add(element){
      if (this.root===null) {
        this.root=new Node(element,null);
        return
      }
      // let currentNode = this.root;
      // let now = null;
      // let compare = null;
      // compare = element - currentNode.element;
      // if (compare>0) {
      //   while (currentNode.right) {
      //     currentNode=currentNode.right;
      //   }
      //   currentNode.right=new Node(element,currentNode);
      // }else {
      //   while (currentNode.left) {
      //     currentNode=currentNode.left;
      //   }
      //   currentNode.left=new Node(element,currentNode);
      // }
  
  
  
      this.size++;
      let currentNode=this.root;
      let parent=null;
      let compare=null;
      while (currentNode){
        compare=element-currentNode.element;
        parent=currentNode;
        if (compare>0) {
          currentNode=currentNode.right
        }else {
          currentNode=currentNode.left
        }
      }
      const newNode=new Node(element,parent)
      if (compare>0) {
        parent.right=newNode
      }else {
        parent.left=newNode
      }
    }
  }
  
  const arr=[10,9,11,22,15,8];
  const bst=new BST();
  arr.forEach(item=>{
    bst.add(item)
  });
  console.dir(bst.root,{depth:1000});
  