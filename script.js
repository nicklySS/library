const myLibrary = [];

function Book(name, author, pageNum, read) {
    this.name = name;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;

    this.info = function () {
        return `${this.name} by ${this.author}, ${this.pageNum} pages, ${
            this.read ? "read" : "not read yet"
        }`;
    };
}

function addBookToLibrary() {

}



const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const witcher = new Book("The Witcher", "A.Sapkovsky",421,true);
const warcraft = new Book("Warcraft 3","Someone",581,true);

myLibrary.push(hobbit);
myLibrary.push(witcher);
myLibrary.push(warcraft);

myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h1 class="name">${book.name}</h1>
        <h2 class="author">${book.author}</h2>
        <h2 class="page-num">${book.pageNum}</h2>
        <div class="read">
            <h2 class="read-txt">Read?</h2>
            <div class="read-tumbler"></div>
        </div>
    `;

    document.getElementById("cards").appendChild(card);
});
