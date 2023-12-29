// let myName = 'Rhey'
let myName1 = 'Angelo'
let myName2 = 'Yana'

const greetEl = document.getElementById('greet-el')
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
// const ampmEl = document.getElementById("ampm");


const updateClock = () => {
	
	let currentTime = new Date();
	let morningMsg = 'Good Morning, '
	let afternoonMsg = 'Good Afternoon, '
	let eveningMsg = 'Good Evening, '

	let greetings = ''

		let hour = currentTime.getHours();
		let minutes = currentTime.getMinutes();
		let seconds = currentTime.getSeconds();
		
		if(hour >= 1 && hour < 12) {
			greetings = `${morningMsg}${myName1} & ${myName2}`
			// ampm = "AM"
		} else if(hour >= 12 && hour < 18) {
			greetings = `${afternoonMsg}${myName1} & ${myName2}`
			// ampm = "PM"
		} else {
			greetings = `${eveningMsg}${myName1} & ${myName2} `
			// ampm = "PM"
		}
		
		hour = (hour < 10 ? "0" : "" ) + hour;
		minutes = (minutes < 10 ? "0" : "" ) + minutes;
		seconds = (seconds < 10 ? "0" : "" ) + seconds;
		
		hourEl.textContent = hour;
		minuteEl.textContent = minutes;
		secondEl.textContent = seconds;
		greetEl.textContent = `${greetings}`;
		setTimeout(updateClock, 1000);
		// ampmEl.innerText = ampm;
		// console.log(greetings)
}
updateClock();

var blink = document.getElementById("greet-el");
setInterval (function() {
	blink.style.opacity =
	(blink.style.opacity == 0 ? 1 : 0);
}, 1000);




