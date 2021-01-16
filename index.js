const firstArticle = [
	{
		image: "./images/icon-online.svg",
		heading: "online banking",
		desc:
			"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
	},
	{
		image: "./images/icon-budgeting.svg",
		heading: "simple budgeting",
		desc:
			"See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
	},
	{
		image: "./images/icon-onboarding.svg",
		heading: "fast onboarding",
		desc:
			"We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
	},
	{
		image: "./images/icon-api.svg",
		heading: "open API",
		desc:
			"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier",
	},
];

const secondArticle = [
	{
		img: "./images/image-currency.jpg",
		name: "by claire robinson",
		title: "Recieve money in any currency with no fees",
		blog:
			"The world is getting smaller and we're becoming more mobile. so why should you be forced to only receive money in a single ...",
	},
	{
		img: "./images/image-restaurant.jpg",
		name: "by wilson hutton",
		title: "Treat yourself without worrying about money",
		blog:
			"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
	},
	{
		img: "./images/image-plane.jpg",
		name: "by wilson hutton",
		title: "Take your Easybank card wherever you go",
		blog:
			"We want you to enjoy your travels. This is why we don't charge any fees on purchase while you're abroad. We'll even show you ...",
	},
	{
		img: "./images/image-confetti.jpg",
		name: "by claire robinson",
		title: "Our invite-only Beta accounts are now live!",
		blog:
			"After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
	},
];

const navToggle = document.querySelector(".nav-toggle");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navigateLinks = document.querySelectorAll(".link-underline a");

const serviceArticle = document.getElementById("service-article");
const articlesContainer = document.getElementById("latest-articles-container");

// runs when the document loads
window.addEventListener("DOMContentLoaded", () => {
	handleServices(firstArticle);
	handleArticle(secondArticle);
});

// 	toggle navbar
navToggle.addEventListener("click", function () {
	if (!this.firstElementChild.classList.contains("hide-toggle")) {
		this.lastElementChild.classList.remove("hide-toggle");
		this.firstElementChild.classList.add("hide-toggle");
		linksContainer.classList.add("links-overlay");
		links.classList.add("show-links");
	} else {
		this.firstElementChild.classList.remove("hide-toggle");
		this.lastElementChild.classList.add("hide-toggle");
		linksContainer.classList.remove("links-overlay");
		links.classList.remove("show-links");
	}
});

// links hover effect
navigateLinks.forEach((link) => {
	link.addEventListener("mouseenter", function () {
		this.nextElementSibling.classList.add("underline");
	});

	link.addEventListener("mouseleave", function () {
		this.nextElementSibling.classList.remove("underline");
	});
});

// loop through the services/articles and display
function handleServices(articles) {
	let displayArticles = articles
		.map(({ image, heading, desc }) => {
			return `<article class="article">
            <div class="service-img-container">
                <img src="${image}" alt='${heading}' />
            </div>
            <div>
                <h4>${heading}</h4>
                <p>${desc}</p>
            </div>
        </article>`;
		})
		.join("");
	serviceArticle.innerHTML = displayArticles;
}

function handleArticle(articles) {
	let displayArticles = articles
		.map(({ img, name, title, blog }) => {
			return `<article class="article latest-article">
			<div class="latest-article-img-container">
				<img src="${img}" alt="${title}" />
			</div>
			<div class="message-container">
				<small>${name}</small>
				<h5 class="hover-state">${title}</h5>
				<p>${blog}</p>
			</div>
		</article>`;
		})
		.join("");
	articlesContainer.innerHTML = displayArticles;
}
