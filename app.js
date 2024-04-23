const express = require('express'); 
const app = express(); 
const port = 8000; // You can use any port you prefer 
 
app.set('view engine', 'ejs'); // Set up EJS as the view engine 
 
// Define routes for different pages 
app.get('/', (req, res) => { 
  res.render('index'); // Renders index.ejs in this example 
}); 
 
app.get('/about', (req, res) => { 
  res.render('about'); // Renders about.ejs in this example 
}); 
 
// Add more routes for other pages... 
 
// Start the server 
app.listen(port, () => { 
  console.log(`Server is running on port ${port}`); 
});


// https://www.quora.com/How-do-you-create-multiple-pages-using-Node-js