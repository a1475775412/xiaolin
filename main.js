var font = Array("嗶哩嗶哩-(゜-゜)つロ乾杯~","哔哩哔哩-(゜-゜)つロ乾杯~","哔哩哔哩-(゜-゜)つロ干杯~");
var audio = document.getElementById("main-audio");
function chang(arr) {
	setTimeout(function() {
		audio.play();
		document.getElementById("font1").innerHTML=arr[0];
	},200);
	setTimeout(function() {
		audio.play();
		document.getElementById("font2").innerHTML=arr[1];
	},400);
	setTimeout(function() {
		audio.play();
		document.getElementById("font3").innerHTML=arr[2];
	},600);
	setTimeout(function() {
		audio.play();
		document.getElementById("font4").innerHTML=arr[3];
	},800);
	setTimeout(function() {
		audio.play();
		document.getElementById("font5").innerHTML=arr[4];
	},1000);
	setTimeout(function() {
		audio.play();
		document.getElementById("font6").innerHTML=arr[5];
	},1200);
	setTimeout(function() {
		audio.play();
		document.getElementById("font7").innerHTML=arr[6];
	},1400);
	setTimeout(function() {
		audio.play();
		document.getElementById("font8").innerHTML=arr[7];
	},1600);
	setTimeout(function() {
		audio.play();
		document.getElementById("font9").innerHTML=arr[8];
	},1800);
	setTimeout(function() {
		audio.play();
		document.getElementById("font10").innerHTML=arr[9];
	},2000);
	setTimeout(function() {
		audio.play();
		document.getElementById("font11").innerHTML=arr[10];
	},2400);
	setTimeout(function() {
		audio.play();
		document.getElementById("font12").innerHTML=arr[11];
	},2600);
	setTimeout(function() {
		audio.play();
		document.getElementById("font13").innerHTML=arr[12];
	},2800);
	setTimeout(function() {
		audio.play();
		document.getElementById("font14").innerHTML=arr[13];
	},3000);
	setTimeout(function() {
		audio.play();
		document.getElementById("font15").innerHTML=arr[14];
	},3200);
	
	setTimeout(function() {
		document.getElementById("font1").innerHTML="·";
		document.getElementById("font2").innerHTML="·";
		document.getElementById("font3").innerHTML="·";
		document.getElementById("font4").innerHTML="·";
		document.getElementById("font5").innerHTML="·";
		document.getElementById("font6").innerHTML="·";
		document.getElementById("font7").innerHTML="·";
		document.getElementById("font8").innerHTML="·";
		document.getElementById("font9").innerHTML="·";
		document.getElementById("font10").innerHTML="·";
		document.getElementById("font11").innerHTML="·";
		document.getElementById("font12").innerHTML="·";
		document.getElementById("font13").innerHTML="·";
		document.getElementById("font14").innerHTML="·";
		document.getElementById("font15").innerHTML="·";
	},100);
}
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
setInterval(function () {
	chang(font[getRandom(0, font.length)])
}, 8000);
