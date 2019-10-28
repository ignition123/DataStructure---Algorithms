function Dictionary()
{
	var items = {};

	this.set = function(key, value)
	{
		items[key] = value;
	};

	this.delete = function(key)
	{
		if(this.has(key))
		{
			delete items[key];
			return true;
		}

		return false;
	};

	this.has = function(key)
	{
		return items.hasOwnProperty(key); 
	};

	this.get = function(key)
	{
		return this.has(key) ? items[key] : undefined;
	};

	this.clear = function(key)
	{
		items = {};
	};

	this.size = function(key)
	{
		return Object.keys(items).length;
	};

	this.keys = function(key)
	{
		return Object.keys(items);
	};

	this.values = function()
	{
		var values = [];

		for(var k in items)
		{
			if(this.has(k))
			{
				values.push(items[k]);
			}
		}

		return values;
	};
}

var dict = new Dictionary();

dict.set("name","Sudeep");

console.log(dict.values());