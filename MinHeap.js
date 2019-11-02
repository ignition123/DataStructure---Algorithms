// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

//[null, 20, 19, 17, 13, 15, 8, 5, 11,9, 10]

function MinHeap()
{
	var heap = [null];

	this.print = function()
	{
		for(var index in heap)
		{
			console.log(heap[index]);
		}
	};
	
	this.insert = function(num)
	{
		heap.push(num);

		if (heap.length > 2)
		{
			let idx = heap.length - 1; // 9

			while (heap[idx] < heap[Math.floor(idx/2)])
			{
				if (idx >= 1)
				{
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];

					if (Math.floor(idx/2) > 1)
					{
						idx = Math.floor(idx/2);
					} 
					else
					{
						break;
					}
				}
			}
		}
	};

	this.remove = function()
	{
		let smallest = heap[1];

		if (heap.length > 2)
		{
			heap[1] = heap[heap.length - 1];

			heap.splice(heap.length - 1);

			if (heap.length == 3)
			{
				if (heap[1] > heap[2])
				{
					[heap[1], heap[2]] = [heap[2], heap[1]];
				}

				return smallest;
			}

			let i = 1;

			let left = 2 * i;

			let right = 2 * i + 1;

			while (heap[i] >= heap[left] || heap[i] >= heap[right])
			{
				if (heap[left] < heap[right])
				{
					[heap[i], heap[left]] = [heap[left], heap[i]];

					i = 2 * i;

				} 
				else
				{
					[heap[i], heap[right]] = [heap[right], heap[i]];

					i = 2 * i + 1;
				}

				left = 2 * i;

				right = 2 * i + 1;

				if (heap[left] == undefined || heap[right] == undefined)
				{
					break;
				}
			}
		} 
		else if (heap.length == 2)
		{
			heap.splice(1, 1);
		} 
		else
		{
			return null;
		}

		return smallest;
	};

	this.sort = function()
	{
		let result = new Array();

		while (heap.length > 1)
		{
			result.push(this.remove());
		}

		return result;
	};
}

var heap = new MinHeap();

heap.insert(1);
heap.insert(2);
heap.insert(10);
heap.insert(6);
heap.insert(4);
heap.insert(5);
heap.insert(7);
heap.insert(8);
heap.insert(3);
heap.insert(9);

heap.print();

console.log(heap.sort());