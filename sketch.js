function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(150, 150, 100);
	
	for (var h = 0; h < hour(); h = h + 1)
	{
		stroke(255)
		fill(200, 50, h*10, 100)
		ellipse(220, 220, (hour()-h) * 15, (hour()-h) * 15)
	}

	for (var m = 0; m < minute(); m = m + 1)
	{
		stroke(255)
		fill(200, 100, m*2, 100)
		ellipse(600, 220, (minute()-m) * 5, (minute()-m) * 5)
	}

	for (var s = 0; s < second(); s = s + 1)
	{
		stroke(255)
		fill(200, 150, s*2, 100)
		ellipse(400, 475, (second()-s) * 3, (second()-s) * 3)
		
		

	}

	textSize(32);
	fill(200, 50, 150)
	text(hour(), 10, 30);
	fill(200, 100, 150)
	text(minute(), 10, 60);
	fill(200, 200, 150)
	text(second(), 10, 90);
}
