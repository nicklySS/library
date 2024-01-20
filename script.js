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
        const readStatus = book.read ? "Read" : "Not read yet";
        const bookIndex = myLibrary.indexOf(book);

        card.classList.add("card");

        card.innerHTML = `
            <h1 class="name">${book.name}</h1>
            <h2 class="author">${book.author}</h2>
            <h2 class="page-num">${book.pageNum}</h2>
            <div class="read">
                <h2 class="read-txt">${readStatus}</h2>
                <div class="read-switch"><div class="read-switch-round"></div></div>
            </div>
            <button class="remove-btn">Remove</button>
        `;

        const readStatusTxt = card.querySelector(".read-txt");
        const switchRead = card.querySelector(".read-switch");
        const switchRound = card.querySelector(".read-switch-round");
        const removeBtn = card.querySelector(".remove-btn");

        switchRead.style.cssText = `background-color: ${
            book.read ? "blue" : "ghostwhite"
        }`;
        switchRound.style.cssText = `background-color: ${
            book.read ? "white" : "lightgray"
        }`;
        switchRead.style.justifyContent = book.read ? "right" : "left";

        switchRead.addEventListener("click", () => {
            myLibrary[bookIndex].read = !myLibrary[bookIndex].read;

            readStatusTxt.textContent = book.read ? "Read" : "Not read yet";

            switchRead.style.cssText = `background-color: ${
                book.read ? "blue" : "ghostwhite"
            }`;
            switchRound.style.cssText = `background-color: ${
                book.read ? "white" : "lightgray"
            }`;

            switchRead.style.justifyContent = book.read ? "right" : "left";
        });

        removeBtn.addEventListener("click", (event) => {
            myLibrary.splice(bookIndex, 1);
            printBooks();
        });

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
