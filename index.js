// document.addEventListener("DOMContentLoaded", function () {
// 	const button = document.querySelector(".channels__button");
// 	const hiddenItems = document.querySelectorAll(
// 		".channels__item:nth-child(n+7)"
// 	);

// 	button.addEventListener("click", function () {
// 		hiddenItems.forEach((item) => {
// 			item.style.display =
// 				item.style.display === "none" || item.style.display === ""
// 					? "block"
// 					: "none";
// 		});
// 	});
// });

// document.addEventListener("DOMContentLoaded", function () {
// 	const faqTextElements = document.querySelectorAll(".faq__text");

// 	faqTextElements.forEach(function (element) {
// 		element.addEventListener("click", function () {
// 			const description = this.nextElementSibling;
// 			description.classList.toggle("hidden");
// 		});
// 	});
// });

document.addEventListener("DOMContentLoaded", function () {
	const faqTextElements = document.querySelectorAll(".faq__text");

	faqTextElements.forEach(function (element) {
		element.addEventListener("click", function () {
			const faqContent = this.closest(".faq__content");
			const description = faqContent.querySelector(".faq__description");
			description.classList.toggle("hidden");
		});
	});
});
