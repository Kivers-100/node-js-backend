const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length) {
      res.status(200).json({
        success: "true",
        message: "List of books fetched successfulIy",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Books not found in collection",
      });
    }
  } catch (error) {
    console.log("Couldn't get book because of error:", error);
    res.status(500).json({
      success: false,
      message: "Someting went wrong Please try again",
    });
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const bookDetailsById = await Book.findById(getCurrentBookId);
    if (!bookDetailsById) {
      return res.status(404).json({
        success: false,
        message: "Book not found! Please try with different ID",
      });
    } else {
      res.status(200).json({
        success: true,
        data: bookDetailsById,
      });
    }
  } catch (error) {
    console.log("An error occured:", error);
    res.status(500).json({
      success: false,
      message: "Someting went wrong Please try again",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreateBook = await Book.create(newBookFormData);

    if (newlyCreateBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreateBook,
      });
    }
  } catch (error) {
    console.log("An error occured:", error);
    res.status(500).json({
      success: false,
      message: "Someting went wrong Please try again",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const upDatedBookFormData = req.body;
    const getCurrentBookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookId,
      upDatedBookFormData,
      { returnDocument: "after" },
    );

     if (!updatedBook) {
      res.status(404).json({
        success: false,
        message: "Book not found! Please try with different ID",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: updatedBook,
      });
    }

  } catch (error) {
    console.log("An error occured:", error);
    res.status(500).json({
      success: false,
      message: "Someting went wrong Please try again",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookId);

    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: "Book not found! Please try with different ID",
      });
    } else {
      res.status(200).json({
        success: true,
        data: deletedBook,
      });
    }
  } catch (error) {
    console.log("An error occured:", error);
    res.status(500).json({
      success: false,
      message: "Someting went wrong Please try again",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
