function LinkedList()
{
	let length = 0;
	let head = null;

	let Node = function(element)
	{
		this.element = element;
		this.next = null;
	}

	// This adds new item to the end of the list

	this.append = function(element)
	{
		let node = new Node(element);
  		let current;

  		if (head === null)
  		{ 
  			//first node on list
		  	head = node; 
	  	} 
	  	else
	  	{ 
		 
		    current = head;
		 
		    //loop the list until find last item 
		    while(current.next)
		    { 
		      current = current.next; 
		    } 
		 
		    //get last item and assign next to node to make the link 
		    current.next = node;
	  	} 
		 
		length++; //update size of list

	}; 

	// This adds new item to the position of the list

  	this.insert = function(position, element)
  	{
  		if(position < 0)
  		{
  			console.log("Invalid position in linked list");
  			return;
  		}

  		if(position > length)
  		{
  			console.log("Invalid position exceeded in linked list");
  			return;
  		}

  		let current = head;
  		let count = 0;

  		while(current)
  		{	
  			if(position === 0)
  			{
  				let node = new Node(element);

  				head = node;
  				head.next = current;

  				break;
  			}
  			else if(count === (position - 1))
  			{
  				let node = new Node(element);

  				let nextNode = current.next;

  				current.next = node;

  				current.next.next = nextNode;

  				break;
  			}

  			count += 1;

  			current = current.next;
  		}

  		length++;
  	}; 

  	// This removes an item at the position of the list

  	this.removeAt = function(position)
  	{
  		if(position < 0)
  		{
  			console.log("Invalid position in linked list");
  			return;
  		}

  		if(position > length - 1)
  		{
  			console.log("Invalid position exceeded in linked list");
  			return;
  		}
  	}; 

  	// This remove items from the end of the list

  	this.remove = function(element)
  	{
  		let current = head;

  		let count = 0;

  		let prevNode;

  		while(current)
  		{
  			if(current.element === element)
  			{
  				if(count === 0)
  				{
  					head = current.next;
  					break;
  				}
  				else
  				{
  					prevNode.next = current.next;
  				}
  			}

  			prevNode = current;
  			current = current.next;

  			count += 1;
  		}

  		if(count === (length + 1))
  		{
  			console.log("No item found in the list");
  		}
  	}; 

  	// This returns the position of the element in the list

  	this.indexOf = function(element)
  	{
  		let current = head;

  		let count = 0;

  		while(current)
  		{
  			if(current.element === element)
  			{
  				break;
  			}

  			current = current.next;
  			count += 1;
  		}

  		return count;
  	};

  	// This checks if list is empty

  	this.isEmpty = function()
  	{
		let current = head;

  		let count = 0;

  		while(current)
  		{
  			current = current.next;
  			count += 1;
  		}

  		if(count === 0)
  		{
  			return true;
  		}
  		else
  		{
  			return false;
  		}
  	}; 

  	// This tells the size of the list

  	this.size = function()
  	{
  		return length;
  	}; 

  	// This converts the list to string

  	this.toString = function()
  	{
  		let current = head;
  		let string = '';
 
	  	while (current)
	  	{  
		    string += current.element + (current.next ? ',' : '');
			current = current.next;
		} 
  		
  		return string; 

  	}; 

  	// convert to json to visualize linkedlist

  	this.toJSON = function()
  	{
  		return JSON.stringify(head);
  	};

  	// This print the list

  	this.print = function()
  	{
  		let current = head;
  		
  		while(current)
  		{
  			console.log(current.element);

  			current = current.next;
  		}
  	};

}

var linkedList = new LinkedList();

linkedList.append("sudeep");
linkedList.append("abhik");
linkedList.append("pritha");

console.log(linkedList.toString());

console.log(linkedList.toJSON());

linkedList.insert(0, "abhishek");

console.log(linkedList.toJSON());

linkedList.insert(4, "shripat");

console.log(linkedList.toJSON());

linkedList.remove("abhik");

console.log(linkedList.toJSON());

console.log(linkedList.indexOf("pritha"));

console.log(linkedList.isEmpty());

linkedList.remove("abhishek");
linkedList.remove("shripat");
linkedList.remove("pritha");
linkedList.remove("sudeep");

console.log(linkedList.toJSON());

console.log(linkedList.isEmpty());

linkedList.remove("sudeep");

linkedList.append("sudeep");
linkedList.append("abhik");
linkedList.append("pritha");

linkedList.print();