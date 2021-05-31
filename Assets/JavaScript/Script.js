const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select Tab Content Item
function selectItem(e) {
	// Remove All Show And Border Classes
	removeBorder();
	removeShow();
	// Add Border To Current Tab Item
	this.classList.add("tab-border");
	// Grab Content Item From Document Object Model
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add Show Class
	tabContentItem.classList.add("show");
}

// Remove Bottom Borders From All Tab Items
function removeBorder() {
	tabItems.forEach((item) => {
		item.classList.remove("tab-border");
	});
}

// Remove Show Class From All Content Items
function removeShow() {
	tabContentItems.forEach((item) => {
		item.classList.remove("show");
	});
}

// Listen For Tab Item Click
tabItems.forEach((item) => {
	item.addEventListener("click", selectItem);
});
