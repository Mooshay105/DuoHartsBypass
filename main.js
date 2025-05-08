(() => {
	// Elements to remove:
	// A `<div>` with the "_1yFTM _3fFQQ FohH5" classes.
	// A `<div>` with the "_3Mzt6" class.
	// A `<svg>` with the "_9ePF4 _1tbIe" classes and a `<rect>` inside with "_3s5cy iRKce" classes.

	/**
	 * Remove the upgrade to super duolingo popup.
	 */
	function removeDuolingoElements() {
		// Get a reference to the upgrade to super duolingo popup.
		const div = document.querySelector("._1yFTM._3fFQQ.FohH5");
		// Get Background stuff
		const div2 = document.querySelector("._3Mzt6");
		const svg = document.querySelector("svg._9ePF4._1tbIe");

		// Remove the upgrade to super duolingo popup.
		if (div) {
			console.log("Found div: ", div);
			div.remove();
		}

		// Remove the background stuff.
		if (div2) {
			console.log("Found div2: ", div2);
			div2.remove();
		}

		if (svg) {
			console.log("Found svg: ", svg);
			svg.remove();
		}
	}

	// Look for the upgrade to super duolingo popup and background stuff and call the `removeDuolingoElements()` function to remove them.
	const observer = new MutationObserver((mutationsList, observer) => {
		for (const mutation of mutationsList) {
			if (mutation.type === "childList") {
				removeDuolingoElements();
			}
		}
	});

	observer.observe(document.body, { childList: true, subtree: true });

	removeDuolingoElements();
})();
