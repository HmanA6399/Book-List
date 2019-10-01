// Store Class
export default class Store {

  //This function returns a parsed array of book data stored in the "books" slot of
  //  the localStorage, or [] if empty.
  getbooks() {
    let books;
    if (!localStorage.getItem("books")) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  //This function takes books data and saves it to the "books" slot of
  //  the localStorage
  saveBook(book) {
    // Hay, don't look like that ! I'm just an empty function D':
  }

  //This function takes a title of a book, searches the localStorage for it and deletes it if found
  removeBooks(title) {
    //Good Morning ^^
    let store = this.getbooks();
    //session is bad !! 
    localStorage.setItem("books", JSON.stringify(store));
  }
}
