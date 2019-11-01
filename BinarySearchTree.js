function BinarySearchTree()
{
	var root = null;

	var Node = function(key)
	{
		this.key = key;
		this.left = null;
		this.right = null;
	};

	var insertNode = function(node, newNode)
	{ 
	  	if (newNode.key <= node.key)
	  	{
		    if (node.left === null)
		    {  
		      	node.left = newNode;  
		    }
		    else
		    { 
		      	insertNode(node.left, newNode);
		    } 
	  	} 
	  	else
	  	{ 
		    if (node.right === null)
		    {
		      node.right = newNode; 
			}
			else
			{ 
		      	insertNode(node.right, newNode);
			} 
		} 
	};

	var inOrderTraverseNode = function (node, callback)
	{ 
	  	if (node !== null)
	  	{
		    inOrderTraverseNode(node.left, callback); 
		    callback(node.key);
		    inOrderTraverseNode(node.right, callback);
	  	} 
	};

	var preOrderTraverseNode = function (node, callback)
	{ 
	  	if (node !== null)
	  	{ 
		    callback(node.key); 
		    preOrderTraverseNode(node.left, callback); 
		    preOrderTraverseNode(node.right, callback); 
	  	} 
	};

	var postOrderTraverseNode = function (node, callback)
	{ 
	  	if (node !== null)
	  	{ 
		    postOrderTraverseNode(node.left, callback); 
		    postOrderTraverseNode(node.right, callback);
		    callback(node.key);  
	  	} 
	};

	var findMin = function(node, callback)
	{
		if (node)
		{ 
		    while (node && node.left !== null)
		    {
		      	node = node.left;                 
		    } 
	 
	    	return node.key;
		}
	};

	var findMax = function(node, callback)
	{
		if (node)
		{ 
		    while (node && node.right !== null)
		    {
		      	node = node.right;                 
		    } 
	 
	    	return node.key;
		}
	};

	var searchNode = function(node, key)
	{
		if(node === null)
		{
			return false;
		}
		else
		{
			if(key < node.key)
			{
				return searchNode(node.left, key);
			}
			else if(key > node.key)
			{
				return searchNode(node.right, key);
			}
			else
			{
				return true;
			}
		}
	};

	var findMinNode = function(node)
	{
		while (node && node.left !== null)
		{
		    node = node.left;
		}

		return node;
	};

	var removeNode = function(node, key)
	{
		if(node === null)
		{
			return null;
		}

		if(key < node.key)
		{
			node.left = removeNode(node.left, key);
			return node;
		}
		else if(key > node.key)
		{
			node.right = removeNode(node.right, key);
			return node;
		}
		else
		{	
			if (node.left === null && node.right === null)
			{ 
		      	node = null; 
		      	return node;
		    }

		    if (node.left === null)
		    {
		      	node = node.right
		      	return node;
		 
		    } 
		    else if (node.right === null)
		    {
		      	node = node.left;
		      	return node;
		    }

		    var aux = findMinNode(node.right);
		    node.key = aux.key
		    node.right = removeNode(node.right, aux.key);
		    return node;
		}
	};

	function printNode(value)
	{ 
	  console.log(value); 
	}

	this.insert = function(key)
	{ 
	  	var newNode = new Node(key);
	 
	  	if (root === null)
	  	{
	    	root = newNode; 
	  	}
	  	else
	  	{ 
	    	insertNode(root,newNode);
	  	} 
	};

	this.search = function(key)
	{
		return searchNode(root, key);
	};
	
	this.inOrderTraverse = function(callback)
	{ 
	  	inOrderTraverseNode(root, printNode);
	};

	this.preOrderTraverse = function(callback)
	{ 
	    preOrderTraverseNode(root, printNode); 
	};

	this.postOrderTraverseNode = function(callback)
	{ 
	    postOrderTraverseNode(root, printNode); 
	};

	this.min = function()
	{
		console.log(findMin(root));
	};

	this.max = function()
	{
		console.log(findMax(root));
	};

	this.remove = function(key)
	{
		removeNode(root, key);
	};

	this.printTree = function()
	{
		console.log(root);
	}
}

var tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(9);
tree.insert(3);
tree.insert(6);
tree.insert(8);
tree.insert(10);
tree.insert(15);
tree.insert(13);
tree.insert(20);
tree.insert(12);
tree.insert(14);
tree.insert(18);
tree.insert(25);

tree.inOrderTraverse()

console.log("#######################");

tree.preOrderTraverse()

console.log("#######################");

tree.postOrderTraverseNode()

console.log("########################");

tree.min();

console.log("########################");

tree.max();

console.log("########################");

tree.printTree();

console.log(tree.search(100));

tree.remove(11);

tree.printTree();
