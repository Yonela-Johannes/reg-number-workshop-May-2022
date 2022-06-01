const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumber = document.querySelector(".regNumber");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");
const storedRegNumbers = []
let plates = localStorage.getItem('plates') ? JSON.parse(localStorage.getItem('plates')) : localStorage.setItem('plates', JSON.stringify([]))
plates = plates ? plates : []
const displayReg = () => {
	for (let i = 0; i < plates.length; i++) {
		regNumbers.innerHTML += `<div class='regNumber'>${plates[i]}<div>`
	}
}

displayReg()
addRegNumberBtn.addEventListener("click", function () {
	if (regNumberEntered.value == "") {
		message.innerHTML = "Please enter a registration number";
		return;
	}

	if (plates.includes(regNumberEntered.value)) {
		message.innerHTML = "Registration numbers has already been entered";
	} else {
		plates.push(regNumberEntered.value)
		localStorage.setItem('plates', JSON.stringify(plates))
	}
});
