function validater()
{
	var p1 = document.getElementById("pass1").value;
	var p2 = document.getElementById("pass2").value;
	if (p1 != p2)
	{
		alert("FAILURE - mismatch");
	}
	else if (p1.length < 8)
	{
		alert("FAILURE - length (must be at least 8 chara)");
	}
	else
	{
		document.getElementById("success").innerHTML = "Valid Password";
	}
}
