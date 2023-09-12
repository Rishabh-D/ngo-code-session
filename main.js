const cross = document.getElementById("cross");
const nav = document.getElementById("nav");
// console.log(cross);
cross.addEventListener("click", (e) => {
	// console.log("clle");
	nav.classList.remove("unhide");
});

const bars = document.getElementsByClassName("bars")[0];
console.log(bars);

bars.addEventListener("click", (e) => {
	// console.log("clledd");
	nav.classList.add("unhide");
	// console.log(nav);
});

