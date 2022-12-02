//menu
var app_main_menu = new Vue({
    el: '#menu',
    data: {
        active_page: -1
    },
    methods: {},
    mounted() {
        if (document.title.includes("Home")) { this.active_page = 0 };
        if (document.title.includes("About")) { this.active_page = 1 };
        if (document.title.includes("Blog")) { this.active_page = 2 };
        if (document.title.includes("Portefolio")) { this.active_page = 3 };      
        if (document.title.includes("Exit")) { this.active_page = 4 };    
        if (document.title.includes("Exit")) { this.active_page = 5 };      
    }
})
const slider = document.querySelector(".items");
	const slides = document.querySelectorAll(".item");
	const button = document.querySelectorAll(".button");
	let current = 0;
	let prev = 4;
	let next = 1;

for (let i = 0; i < button.length; i++){
	button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);
const gotoNum = number =>{
	current = number;
	prev = current - 1;
	next = current + 1;
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
		slides[i].classList.remove("prev");
		slides[i].classList.remove("next");
}
	if(next == 5) {
		next = 0;
	}
	if(prev == -1){
	    prev = 4;
	}
	slides[current].classList.add("active");
	slides[prev].classList.add("prev");
	slides[next].classList.add("next");
}