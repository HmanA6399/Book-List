// UI Class
export default class UI {
  
  //This function takes an array of book data and uses "this.createCardBook(book)" to display each one
  displayBooks(books) {
    books.forEach(book => this.createCardBook(book));
  }

  //This function takes book data, creates card for it and appends the card to the container
  createCardBook(data) {
    let { title, desc, author } = data;
    let card = this.createElement("article", "card");

    let cardTitle = this.createElement("h2", "card-title", title);

    let cardDesc = this.createElement("p", "card-desc", desc);

    let cardAuthor = this.createElement("p", "card-author", author);

    let removeButton = this.createElement(
      "button",
      "card-remove",
      '<i class="fa fa-trash-alt"></i>'
    );

    //   append these elements into card
    card.appendChild(cardTitle);
    card.appendChild(cardDesc);
    card.appendChild(cardAuthor);
    card.appendChild(removeButton);

    // append card into book cards
    document.querySelector(".book-cards").appendChild(card);
  }

  //This is a helper function for creating a card, adding class to it and fill it with some HTML content
  createElement(el, className, content) {
    let element = document.createElement(el);

    element.className = className;

    if (content) element.innerHTML = content;

    return element;
  }

  //This function removes THE PARENT OF AN ELEMENT ! and showes a message
  removeElement(target) {
    //OH NO !! I'm just an empty fn :P
  }

  //This function creates a simple message element and showes it before the form for 2sec
  showAlert(className, content) {
    let errorMsg = this.createElement("p", `${className}`, `${content}`);

    document
      .querySelector(".container")
      .insertBefore(errorMsg, document.querySelector("#book-form"));

    //Looks like I'm going to stay to the infinity ! ^^
  }
} // end UI
