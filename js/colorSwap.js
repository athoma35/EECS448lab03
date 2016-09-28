function colorSwap()
{
	var borderRed = parseInt(document.getElementById("borderRed").value);
	var borderGreen = parseInt(document.getElementById("borderGreen").value);
	var borderBlue = parseInt(document.getElementById("borderBlue").value);
	var borderWidth = document.getElementById("borderWidth").value + "px";
	var backgroundRed = parseInt(document.getElementById("backgroundRed").value);
	var backgroundGreen = parseInt(document.getElementById("backgroundGreen").value);
	var backgroundBlue = parseInt(document.getElementById("backgroundBlue").value);

	var dummyText = document.getElementById("colorer");

	dummyText.style.backgroundColor = "rgb(" + backgroundRed + ", " + backgroundGreen + ", " + backgroundBlue + ")";
	dummyText.style.borderWidth = borderWidth;
	dummyText.style.borderColor = "rgb(" + borderRed + ", " + borderGreen + ", " + borderBlue + ")";
}
