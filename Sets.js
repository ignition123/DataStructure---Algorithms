function Set()
{
	let items = {};

	this.add = function(value)
	{
		if(!this.has(value))
		{
			items[value] = value;
			return true;
		}

		return false;
	};

	this.delete = function(value)
	{
		if(this.has(value))
		{
			delete items[value];
			return true;
		}

		return false;
	};

	this.has = function(value)
	{
		return items.hasOwnProperty(value);
	};

	this.clear = function()
	{
		items = {};
	};

	this.size = function()
	{
		return Object.keys(items).length;
	};

	this.values = function()
	{
		return items;
	};
}

var set = new Set();

set.add("sudeep");
set.add("abhik");
set.add("vinay");
set.add("pritha");

console.log(set.values());

set.delete("vinay");

console.log(set.values());

set.clear();

console.log(set.values());
