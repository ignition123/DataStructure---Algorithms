function HashTable()
{
	var table = [];

	this.put = function(key, value)
	{
		var position = this.loseloseHashCode(key);

		table[position] = value;
	};

	this.remove = function(key)
	{
		table[this.loseloseHashCode(key)] = undefined;
	};

	this.get = function(key)
	{
		return table[this.loseloseHashCode(key)];
	};

	this.loseloseHashCode = function(key)
	{
		var hash = 0;

		for(var i=0;i<key.length;i++)
		{
			hash += key.charCodeAt(i);
		}

		return hash % 37;
	}
}

var hashTab = new HashTable();

hashTab.put("name","sudeep");
hashTab.put("reg",10810315);

console.log(hashTab.get("name"));

console.log(hashTab.get("reg"));
