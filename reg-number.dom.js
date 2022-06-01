const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumber = document.querySelector(".regNumber");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");
const storedRegNumbers = []

addRegNumberBtn.addEventListener("click", function () {
	if (regNumberEntered.value == "") {
		message.innerHTML = "Please enter a registration number";
		return;
	}

	if (storedRegNumbers.includes(regNumberEntered.value)) {
		message.innerHTML = "Registration numbers has already been entered";
	} else {
		storedRegNumbers.push(regNumberEntered.value)
		for (let i = 0; i < storedRegNumbers.length; i++) {
			regNumbers.innerHTML += `<div class='regNumber'>${storedRegNumbers[i]}<div>`
		}
	}
});
