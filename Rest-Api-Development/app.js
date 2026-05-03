const express = require("express");
const app = express();

//middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Book API" });
});

const books = [
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" },
  { id: 3, title: "Book 3" },
];

//books route
app.get("/get", (req, res) => {
  res.json(books);
});

//single book route
app.get("/get/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// add a new book
app.post("/add", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000), // Generate a random ID for simplicity
    title: `Book ${Math.floor(Math.random() * 1000)}`,
  };
  books.push(newBook);
  res.status(201).json({
    data: newBook,
    message: "Book added successfully",
  });
});

//update a book
app.put("/update/:id", (req, res) => {
  const findCurrentBook = books.find(
    (book) => book.id === parseInt(req.params.id),
  );

  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;
    res.status(200).json({
      data: findCurrentBook,
      message: `Book with ID ${req.params.id} updated successfully`,
    });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});
//delete a book
app.delete("/delete/:id", (req, res) => {
  const findCurrentBookIndex = books.findIndex(
    (book) => book.id === parseInt(req.params.id),
  );

  if (findCurrentBookIndex !== -1) {
    const deletedBook = books.splice(findCurrentBookIndex, 1);
    res.status(200).json({
      data: deletedBook[0],
      message: `Book with ID ${req.params.id} deleted successfully`,
    });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
