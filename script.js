var displayTime = document.querySelector(".time");

function time(){
	var date = new Date();
	let sec = date.getSeconds();
	let min = date.getMinutes();
	let hr = date.getHours();
	
	//adding zero
	sec = addZero(sec);
	min = addZero(min);
	hr = addZero(hr);

	//convertformat
	let formatHour = convertformat(hr);

	//checkTime
	hr = checkTime(hr);

	displayTime.innerHTML = `${hr}:${min}:${sec} ${formatHour}`
}

function addZero(time){
	if(time < 10){
		time = "0" + time;
	}
	return time;
}

function convertformat(time){
	let format = "AM";
	if(time >= 12){
		format = "PM";
	}else{
		format = "AM"
	}

	return format;
}

function checkTime(time){
	if(time > 12){
		time = time - 12
	}else if(time === 0){
		time = 12;
	}
	return time;
}

setInterval(time,1000);

//ANALOG CLOCK CODE

var hand = document.querySelector(".hand");
var secHand = document.querySelector(".sec-hand");
var minHand = document.querySelector(".min-hand");
var hrHand = document.querySelector(".hr-hand");

function analogClock(){
	let date = new Date();

	let sec = date.getSeconds();
	let secHandDegree = sec * (360/60) + 90;
	secHand.style.transform = `rotate(${secHandDegree}deg)`;

	let min = date.getMinutes();
	let minHandDegree = min * (360/60) + 90;
	minHand.style.transform = `rotate(${minHandDegree}deg)`;

	let hr = date.getHours();
	let hrHandDegree = hr * (360/60) + 90;
	hrHand.style.transform = `rotate(${hrHandDegree}deg)`;
}

setInterval(analogClock,1000);

//btn
var analogClock = document.querySelector(".analog-clock");
var digitalClock = document.querySelector(".digital-clock");
var switchBtn = document.querySelector(".switch-btn");

switchBtn.addEventListener("click",function(){
	analogClock.classList.toggle("visible-analog-toggle");
	digitalClock.classList.toggle("hide-digital-toggle")
	document.body.style.overflow = "hidden";
});

