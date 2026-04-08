// Note: I used the MDN dev pages as a reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play 

var video = document.querySelector("#player1");
let volInfo = document.querySelector("#slider");
let volOutput = document.querySelector("#volume");
var muteBtn = document.querySelector("#mute");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log(`Autoplay is set to ${video.autoplay}`);
	console.log(`Loop is set to ${video.loop}`);

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volOutput.textContent = `${volInfo.value}%`;
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log(`Speed is ${video.playbackRate}`);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.9;
	console.log(`Speed is ${video.playbackRate}`);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10;
	let newTime = video.currentTime;
	if (newTime > video.duration ) {
		video.currentTime = 0;
	} else {
		console.log(`Video current time is ${newTime}`)
	}
});

muteBtn.addEventListener("click", () => {
	if (muteBtn.textContent == "Mute") {
		muteBtn.textContent = "Unmute";
		console.log("Mute");
		video.muted = true;
	} else {
		muteBtn.textContent = "Mute";
		console.log("Unmute");
		video.muted = false;
	}
});

document.querySelector("#slider").addEventListener("change", () => {
	video.volume = (volInfo.value / 100);
	volOutput.textContent = `${volInfo.value}%`;
	console.log(`The current value is ${(volInfo.value / 100)}`)
	console.log(volOutput.outerHTML);
})

document.querySelector("#vintage").addEventListener("click", () => {
	video.setAttribute("class", "oldSchool");
})

document.querySelector("#orig").addEventListener("click", () => {
	video.removeAttribute("class");
})