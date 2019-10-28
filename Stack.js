class Stack
{
	constructor()
	{
		this.items = []; 
	}

	push(element)
	{
		this.items.push(element);
	}

	pop()
	{
		if(this.items.length === 0)
		{
			console.log("Stack is empty, nothing to pop");
			return;
		}

		this.items.pop();
	}

	printStack()
	{
		console.log(this.items);
	}
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.printStack();

stack.pop();

stack.printStack();

stack.push(5);

stack.printStack();