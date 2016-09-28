function nextPic()
{
	var theImage = document.getElementById("mainPic");
	var imageNo = document.getElementById("imageNo");
	if (imageNo.innerHTML == "1")
	{
		theImage.src = "img/image02.png";
		imageNo.innerHTML = "2";
	}
	else if (imageNo.innerHTML == "2")
	{
		theImage.src = "img/image03.png";
		imageNo.innerHTML = "3";
	}
	else if (imageNo.innerHTML == "3")
	{
		theImage.src = "img/image04.png";
		imageNo.innerHTML = "4";
	}
	else if (imageNo.innerHTML == "4")
	{
		theImage.src = "img/image05.png";
		imageNo.innerHTML = "5";
	}
	else if (imageNo.innerHTML == "5")
	{
		theImage.src = "img/image01.png";
		imageNo.innerHTML = "1";
	}
}

function lastPic()
{
	var theImage = document.getElementById("mainPic");
	var imageNo = document.getElementById("imageNo");
	if (imageNo.innerHTML == "1")
	{
		theImage.src = "img/image05.png";
		imageNo.innerHTML = "5";
	}
	else if (imageNo.innerHTML == "2")
	{
		theImage.src = "img/image01.png";
		imageNo.innerHTML = "1";
	}
	else if (imageNo.innerHTML == "3")
	{
		theImage.src = "img/image02.png";
		imageNo.innerHTML = "2";
	}
	else if (imageNo.innerHTML == "4")
	{
		theImage.src = "img/image03.png";
		imageNo.innerHTML = "3";
	}
	else if (imageNo.innerHTML == "5")
	{
		theImage.src = "img/image04.png";
		imageNo.innerHTML = "4";
	}
}
