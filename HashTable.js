function HashTable()
{
	var table = [];

	this.put = function(key, value)
	{
		var position = this.loseloseHashCode(key);

		table[position] = value;

		console.log(table);
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
		var hash = 5381;  

		for (var i = 0; i < key.length; i++)
		{ 
		    hash = hash * 33 + key.charCodeAt(i); 
		} 
		 
		return hash % 1013;
	}
}

var hashTab = new HashTable();

hashTab.put("name","sudeep");
hashTab.put("reg",10810315);

console.log(hashTab.get("name"));

console.log(hashTab.get("reg"));
