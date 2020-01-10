class Stack { 
  
    
    constructor(maxsize) 
    { 
        this.myStack=[];
        this.maxsize=maxsize;
        
    } 

    
push(val) 
{
    if(this.myStack.length!=this.maxsize)
    {
        //console.log("pushed");
             this.myStack.push(val);
            
             return 0;
        }
        else
        {
            return -1;
        }
    
    
} 


pop()   
{ 
    
    if (this.myStack.length == 0) {
        return -1;                   
    }
         
    else
    {
    //return this.myStack.pop(); 
    this.myStack.pop();
    return 0;
    } 

}


}


let obj=new Stack(2);
console.log(obj.push(10));
console.log(obj.push(10));
console.log(obj.push(10));
console.log(obj.push(10));


console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());





//queue
class Queue { 
  
    
    constructor(maxsize) 
    { 
        this.myQueue=[];
        this.maxsize=maxsize;
        
    } 

    
enqueue(val) 
{
    if(this.myQueue.length!=this.maxsize)
    {
        //console.log("pushed");
             this.myQueue.push(val);
            
             return 0;
        }
        else
        {
            return -1;
        }
    
    
} 


dequeue()   
{ 
    
    if (this.myQueue.length == 0) {
        return -1;                   
    }
         
    else
    {
    //return this.myQueue.shift(); 
    this.myQueue.shift();
    return 0;
    } 

}


}


let obj1=new Queue(2);
console.log(obj1.enqueue(10));
console.log(obj1.enqueue(10));
console.log(obj1.enqueue(10));
console.log(obj1.enqueue(10));


console.log(obj1.dequeue());
console.log(obj1.dequeue());
console.log(obj1.dequeue());
console.log(obj1.dequeue());





