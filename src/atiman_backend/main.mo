import Array "mo:base/Array";
import Time "mo:base/Time";

actor {

  // Define the book type
  public type Book = {
    id : Nat;
    name : Text;
    email : Nat;
    aptNotes : Text;
    aptDate : Time.Time;
    aptTime : Time.Time;
    isBooked : Bool;
  };

  // State variables
  stable var books : [Book] = [];
  var nextId : Nat = 0;

  // Query function to fetch all books
  public query func getBooks() : async [Book] {
    return books;
  };

  // Function to add a new book
  public func addBook(name : Text, email : Nat, aptNotes : Text, aptDate : Time.Time, aptTime : Time.Time) : async () {
    let newBook : Book = {
      id = nextId;
      name = name;
      email = email;
      aptNotes = aptNotes;
      aptDate = aptDate;
      aptTime = aptTime;
      isBooked = true;
    };
    books := Array.append<Book>(books, [newBook]);
    nextId := nextId + 1;
  };

  // Function to delete book by id
  public func deleteBook(id : Nat) : async () {
    books := Array.filter<Book>(
      books,
      func(book : Book) : Bool {
        book.id != id;
      },
    );
  };

  // Function to update a book by id
  public func updateBook(id : Nat, name : Text, email : Nat, aptNotes : Text, aptDate : Time.Time, aptTime : Time.Time) : async () {
    books := Array.map<Book, Book>(
      books,
      func(book : Book) : Book {
        if (book.id == id) {
          return {
            id = book.id;
            name = name;
            email = email;
            aptNotes = aptNotes;
            aptDate = aptDate;
            aptTime = aptTime;
            isBooked = book.isBooked;
          };
        } else {
          return book;
        };
      },
    );
  };

  // Function to cancel aa book by id
  public func cancelBook(id : Nat) : async () {
    books := Array.map<Book, Book>(
      books,
      func(book : Book) : Book {
        if (book.id == id) {
          if (book.isBooked) {
            return {
              id = book.id;
              name = book.name;
              email = book.email;
              aptNotes = book.aptNotes;
              aptDate = book.aptDate;
              aptTime = book.aptTime;
              isBooked = false;
            };
          } else {
            return book;
          };
        } else {
          return book;
        };
      },
    );
  };

};
