

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dotsDiv = document.getElementById("d");
let i = 0;
const dots_array = document.querySelectorAll("d")
let numero = 0;
let slidesIndex = 0;

function changeSlide(sens) {
	numero = numero + sens;
	slidesIndex = numero;
	if (numero < 0)
		numero = slides.length - 1;
	if (numero > slides.length - 1)
		numero = 0;
	changeBulletActive(numero);
	document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[numero]['image'];
	document.getElementById("p").innerHTML = slides[numero]['tagLine'];

}

for (i = 0; i < slides.length; i++) {
	const bullet = document.createElement("span");
	dotsDiv.appendChild(bullet);
	bullet.classList.add("dot");
	if (i === 0)
		bullet.classList.add("dot_selected")
}

function changeBulletActive(index) {
	Array.from(document.querySelectorAll(".dot")).forEach((element, indx) => {
		if (index === indx)
			element.classList.add("dot_selected");
		else element.classList.remove("dot_selected");
	})
}

let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
	changeSlide(1);
	console.log(arrowRight);
})

let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
	changeSlide(-1);
	console.log(arrowLeft);
})