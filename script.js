const bodyEl = document.querySelector("body")


bodyEl.addEventListener("mousemove", (e) => {
	const setY = e.offsetY;
	const setX = e.offsetX;

	const spanEl = document.createElement("span");
	spanEl.style.left = setX + "px";
	spanEl.style.top = setY + "px";
	const size = Math.random() * 100;
	spanEl.style.width = size + "px";
	spanEl.style.height = size + "px"

	bodyEl.appendChild(spanEl);

	setTimeout(() => {
		spanEl.remove()
	}, 3000)
})