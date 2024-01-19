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
    const form = document.querySelector("#modal-form");
    const inputs = form.querySelectorAll("input");

    const newBook = {
        name: inputs[0].value,
        author: inputs[1].value,
        pageNum: Number(inputs[2].value),
        read: inputs[3].checked,
    };

    myLibrary.push(
        new Book(newBook.name, newBook.author, newBook.pageNum, newBook.read)
    );

    for (const input of inputs) {
        input.value = "";
    }

    printBooks();

    // form.submit();
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const witcher = new Book("The Witcher", "A.Sapkovsky", 421, true);
const warcraft = new Book("Warcraft 3", "Someone", 581, true);

myLibrary.push(hobbit);
myLibrary.push(witcher);
myLibrary.push(warcraft);

function printBooks() {
    document.querySelector("#cards").innerHTML = "";
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
}

function showAddWindow() {
    document.querySelector(".modal").style.cssText = "left: 0;";
}
function closeAddWindow() {
    document.querySelector(".modal").style.cssText = "left: -100%;";
}


printBooks();