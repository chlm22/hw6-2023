// 1.	Demonstrate ability to access and modify HTML general DOM elements.
// 2.	Demonstrate ability to add eventListeners (not to add events to the HTML code)
// 3.	Demonstrate the ability to access and modify a video element.
// 4.	Demonstrate ability to use problem-solving with JS operators to modify element attributes.
// 5.	Demonstrate the ability to create output via the console.
// 6.	Demonstrate ability to use JS to utilize existing code (particularly CSS code).

let videoHtml = document.getElementById("player1");
// Page load	Initialize the video element and turn off autoplay and turn off looping.

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


// Play Button	Play the video and update the volume information.  
function playButton(){
	console.log("Play Video");
	videoHtml.play();
}
const playBtn = document.querySelector("#play");
playBtn.addEventListener("click", playBtn);


// Pause Button	Pause the video.
const pauseBtn = document.querySelector("#pause");
function pauseButton(){
	console.log("Pause Video");
	videoHtml.pause();
}
pauseBtn.addEventListener("click", pauseButton);


// Slow Down	Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  


// Speed Up	Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.


// Skip Ahead	Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.




// Mute	Mute/unmute the video and update the text in the button.
const muteBtn = document.getElementById("mute");
function enableMute(){
	videoHtml.muted = true;
}

function disableMute(){
	videoHtml.muted = false;
}

function checkMute(){
	if(videoHtml.muted){
		disableMute;
		console.log("Video now UNmuted.");
	}
	else{
		enableMute;
		console.log("Video now muted.");
	}
}

muteBtn.addEventListener("click",checkMute);

// Volume Slider	Change the volume based on the slider and update the volume information.




// Styled	Utilize the existing oldSchool class on the video element
const vintageBtn = document.getElementById("vintage");

function vintageButton(){
	videoHtml.style.filter = 'graysacle(1)';
}

vintageBtn.addEventListener("click", vintageButton);

// Original	Remove the oldSchool class from the video.
const originalBtn = document.getElementById("orig");

function originalButton(){
	videoHtml.style.filter = "none";
}
originalBtn.addEventListener("click", originalButton);