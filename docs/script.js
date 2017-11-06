function clearAnim8() {
	var display = document.getElementById("Anim8");
	for (var i = 0; i < display.classList.length; i++) {
		if (i > 0) {
			display.classList.remove(display.classList[i]);
		};
	};
};

function addAnim8(animation) {
	clearAnim8();
	var display = document.getElementById("Anim8");
	display.classList.add(animation);
};

function loadAnim8() {
	document.getElementById("Grow").addEventListener("click", function() {addAnim8("Anim8-Grow")}, false);
	document.getElementById("Spin").addEventListener("click", function() {addAnim8("Anim8-Spin")}, false);
	document.getElementById("Wobble-Spin").addEventListener("click", function() {addAnim8("Anim8-Wobble-Spin")}, false);
	document.getElementById("FadeIn-Left").addEventListener("click", function() {addAnim8("Anim8-FadeIn-Left")}, false);
	document.getElementById("FadeIn-Right").addEventListener("click", function() {addAnim8("Anim8-FadeIn-Right")}, false);
	document.getElementById("FadeIn-Up").addEventListener("click", function() {addAnim8("Anim8-FadeIn-Up")}, false);
	document.getElementById("FadeIn-Down").addEventListener("click", function() {addAnim8("Anim8-FadeIn-Down")}, false);
	document.getElementById("Slide-Left").addEventListener("click", function() {addAnim8("Anim8-Slide-Left")}, false);
	document.getElementById("Slide-Right").addEventListener("click", function() {addAnim8("Anim8-Slide-Right")}, false);
	
	
	document.getElementById("Clear").addEventListener("click", clearAnim8, false);
	//document.getElementById("").addEventListener("click", function() {addAnim8("Anim8-")}, false);
};

window.addEventListener('load', loadAnim8, false);