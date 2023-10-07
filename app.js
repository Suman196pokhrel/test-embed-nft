// Import required modules
const express = require('express');
const cors = require("cors")
const embedRoutes = require("./src/routes/embed")

// Create an Express app
const app = express();
app.use(cors())
app.use(express.json())
app.use("/embed", embedRoutes)


const port = process.env.PORT || 8000

// Sample data
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// Define a route to get all items
app.get('/api/items', (req, res) => {
    res.json(items);
});


app.post('/api/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});




// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
