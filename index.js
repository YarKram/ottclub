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
