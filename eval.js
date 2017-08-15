function Compile()
{
	var code = document.getElementById('UserCode').value;
	
	
	//Nested anonymous function to limit "eval"´s scope influence
	(function()
	{
		eval(code);
		
	})();
}

