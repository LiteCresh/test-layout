document.addEventListener("DOMContentLoaded", function () {
	const menuButton = document.querySelector(".menu-button");
	const header = document.querySelector(".header");
	const headerContainer = document.querySelector(".header__container");
	const menuNav = document.querySelector(".menu-nav");
	const contacts = document.querySelector(".contacts");
	const headerBlock = document.querySelector(".header__block");
	
	let isMenuOpen = false;

	function toggleMenu() {
		if (window.innerWidth < 1439.89) {
			 if (isMenuOpen) {
				  menuNav.classList.add("hide");
				  contacts.classList.add("hide");
				  setTimeout(() => {
						menuNav.classList.remove("active", "hide");
						contacts.classList.remove("active", "hide");
						header.style.height = "62.98px";
						headerContainer.style.height = "62.98px";
						headerBlock.style.height = "62.98px";
				  }, 200);
			 } else {
				  header.style.height = "280px";
				  headerContainer.style.height = "280px";
				  headerBlock.style.height = "280px";
				  contacts.classList.add("active");
				  setTimeout(() => {
						menuNav.classList.add("active");
				  }, 300);
			 }
			 isMenuOpen = !isMenuOpen;
		}
  }

	function resetMenu() {
		 if (window.innerWidth >= 1439.89) {
			  header.style.height = "103px";
			  headerContainer.style.height = "103px";
			  headerBlock.style.height = "103px";
		 } else {
			  header.style.height = "103px";
			  headerContainer.style.height = "103px";
			  headerBlock.style.height = "103px";
		 }
		 menuNav.classList.remove("active", "hide");
		 contacts.classList.remove("active");
		 isMenuOpen = false;
	}

	menuButton.addEventListener("click", toggleMenu);
	window.addEventListener("resize", resetMenu);
	resetMenu();
});
