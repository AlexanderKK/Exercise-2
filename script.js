const tabLinks = document.querySelectorAll(".tabLink");
const tabContents = document.getElementsByClassName("tabContent");
const closeBtns = document.querySelectorAll(".closeBtn");

for(let el of closeBtns) {
	el.style.display = "none";
}

//Rnd Color Gen
let rndColor = () => {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

//Level 2 Event For Tab Links
for (let i = 0; i < tabLinks.length; i++) {

	tabLinks[i].addEventListener("click", function() {
		
		//Button
		for(let el of tabLinks) {
			el.classList.remove("active");
			// el.style.backgroundColor = "#f1f1f1";
		}	
		this.classList.add("active");

		//Random Color

		// let randomColor = rndColor();
		// this.style.backgroundColor = randomColor;
		// console.log(randomColor);
		// console.log(currentTabRef, typeof currentTabRef);


		//Tab Content
		for(let el of tabContents) {
			el.style.backgroundColor = "#f1f1f1";
			el.style.display = "none";
		}

		let currentTabRef = "tab" + (i + 1);

		let currentTabContent = document.querySelector("#" + currentTabRef);
		// currentTabContent.style.backgroundColor = randomColor;
		currentTabContent.style.display = "block";

		//Tab CloseBtn
		let currentBtn = document.querySelector("#" + currentTabRef + " .closeBtn");
		currentBtn.style.display = "block";
	});
}

//Level 2 Event For Close Buttons
closeBtns.forEach((el) => el.addEventListener("click", function(){
	el.parentElement.style.display = "none";
	// for(let el of tabLinks) {
	// 	el.style.backgroundColor = "#f1f1f1";
	// }
}));

const defaultTab = document.getElementById("defaultOpen");
defaultTab.click();

//Inline event
function displayContent(evt, id) {
	// Button
	for(let el of tabLinks) {
		el.className = el.className.replace(" active", "");
	}

	for(let el of tabContents) {
		el.style.display = "none";
	}

	evt.currentTarget.className += " active";

	//Tab Content
	let tabContent = document.getElementById(id);
	tabContent.style.display = "block";
	
	//Tab CloseBtn
	let currentBtn = document.querySelector("#" + id + " span");
	currentBtn.style.display = "block";
}