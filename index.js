window.addEventListener("load", () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-form");
	const list_el = document.querySelector("#tasks");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const task = input.value;
		if (!task) {
			alert("Please fill out the task");
		} else {
			console.log("Success");
		}
	});
});
