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
  description: { type: String, required: true },
  email: { type: String, required: true },
});

const Book = mongoose.model('Book', bookSchema);

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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
