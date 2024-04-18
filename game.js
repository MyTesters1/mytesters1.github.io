var pets = 0;
var petMultiple = 0;
var petMultipleCost = 50;
var cat = document.querySelector(".cat");
var petCount = document.querySelector(".petCount");
var petMultiplierBtn = document.querySelector(".btnPetMultiplier");

let onPet = () => {
	pets = pets + (1 + petMultiple);
	petCount.innerHTML = `<h1><b>${pets}</b></h1>times`;
};
let multiplyThePets = () => {
	if (pets >= petMultipleCost){
		pets -= petMultipleCost;
		petCount.innerHTML = `<h1><b>${pets}</b></h1>times`;
		petMultiple++;
		petMultipleCost = Math.floor(petMultipleCost * 1.5);
		petMultiplierBtn.innerHTML = `Add pet multiplier (x${petMultiple + 1}) (Cost: ${petMultipleCost})`;
	}
};

cat.addEventListener("click", onPet);
petMultiplierBtn.addEventListener("click", multiplyThePets);