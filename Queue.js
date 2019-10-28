class Queue
{
	constructor()
	{
	  this.items = [];
	}

	enqueue(element)
	{
		this.items.unshift(element);
	}

	dequeue()
	{
		if(this.items.length === 0)
		{
			console.log("Queue is empty, nothing to delete");
			return;
		}

		this.items.splice(this.items.length - 1, 1);
	}

	printQueue()
	{
		console.log(this.items);
	}
}

queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

queue.printQueue();

queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.printQueue();

queue.enqueue(7);

queue.printQueue();