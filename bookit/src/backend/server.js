// server.js
const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(cors())
const PORT = process.env.PORT || 5000;

// Connect to local MongoDB
mongoose.connect('mongodb://localhost:27017/bookit', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema and model for books
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: false },
  email: { type: String, required: true },
});

const Book = mongoose.model('bookit', bookSchema);

app.use(bodyParser.json());

// Define a route to get all books
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define a route to add a new book
app.post('/api/books', async (req, res) => {
  try {
    const { title, author, genre, price, description, email } = req.body;

    const newBook = new Book({
      title,
      author,
      genre,
      price,
      description,
      email,
    });

    await newBook.save();

    res.status(201).json({ message: 'Book added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//to get all the listings of the user withthe help of user email id incoming as a query parameter
app.get('/api/listings' , async (req, res) => {
  try {
    const useremail = req.query.email;
    const listings = await Book.find({email: useremail});
    res.json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//to delete a listing of the user with the help of object id as well as book title incoming as a query parameter
app.delete('/api/listingsDelete' , async (req, res) => {
  try {
    const useremail = req.query.email;
    const booktitle = req.query.title;
    const id = req.query.id;
    const listings = await Book.deleteOne({email: useremail, title: booktitle, _id: id});
    res.json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
