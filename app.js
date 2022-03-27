function addBook() {
	let name = document.getElementById("name");
	let author = document.getElementById("author");
	let year = document.getElementById("year");
	let pages = document.getElementById("pages");
	let isRead = document.getElementById("isRead");

	let book = new Book(
		name.value,
		author.value,
		year.value,
		pages.value,
		isRead.value
	);

	books.push(book);

	name.value = "";
	author.value = "";
	year.value = "";
	pages.value = "";
	isRead.value = "";

	displayBooks(books);
	showForm();
}

function showForm() {
	let form = document.getElementById("form");
	let bookContent = document.getElementById("bookContent");
	form.style.display == "block"
		? (form.style.display = "none")
		: (form.style.display = "block");
}

function Book(name, author, year, pages, isRead) {
	this.name = name;
	this.author = author;
	this.year = year;
	this.pages = pages;
	this.isRead = isRead;
}

function displayBooks(books) {
	let bookContent = document.getElementById("bookContent");
	bookContent.innerHTML = "";
	for (i = 0; i < books.length; i++) {
		bookContent.innerHTML += `<div class="book">
		<h3>Title</h3>
		<p>${books[i].name}</p>

		<h3>Author:</h3>
		<p>${books[i].author}</p>

		<h3>Year:</h3>
		<p>${books[i].year}</p>

		<h3>Pages:</h3>
		<p>${books[i].pages}</p>

		<h3>Read?</h3>
		<p>${books[i].isRead == "on" ? "Yes" : "No"}</p>
	</div>`;
	}
}

let books = [];

let btn = document.getElementById("button");

btn.addEventListener("click", addBook);
