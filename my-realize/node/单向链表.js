class Node{
    constructor(element,next) {
      this.element=element;
      this.next=next;
    }
  }
  class LinkedList {
    constructor(head,size) {
      this.head=null;
      this.size=0;
    }
    add(index,element){
      if (arguments.length===1) {// 如果只传一个参数，第一个参数就是值，他的下标就是 当前的长度；
        element=index;
        index=this.size;
      }
      if (index<0 ||index>this.size) {// 链表的要求
        throw new Error('越界')
      }
      if (index===0) {// 当下标为0的时候，默认直接创建
        let head=this.head;
        this.head=new Node(element,head)
      }else {// 当下标不为o 的时候包括 传单个值和双值两类
        let preNode=this.getNode(index-1);
          preNode.next=new Node(element,preNode.next)
      }
      this.size++
  
    }
    getNode(index){
      let current=this.head;
      for (let i = 0; i < index; i++) {
        current=current.next;
      }
      return current
    }
    reverseLinkedList(){// 考虑翻转，我们可以先考虑来两个进行翻转， 翻转之后再考虑第二个和第三个翻转；一直到最后，进行递归
      const reverse=(head)=> {
        if (head===null || head.next===null) {
          return head
        }
        let newHead=reverse(head.next);// 先保存一下原先的头；
        head.next.next=head;// b--->a
        head.next=null; // a-->null
        return newHead
      }
      this.head=reverse(this.head);
      return this.head
    }
  }
  
  let newLinkedList=new LinkedList();
  newLinkedList.add(0,100)
  newLinkedList.add(0,200);
  newLinkedList.add(300);
  newLinkedList.add(5600);
  newLinkedList.add(1,500);
  console.dir(newLinkedList,{depth:1000});
  console.dir(newLinkedList.reverseLinkedList(),{depth:1000});
  // 200,500,100,300,5600