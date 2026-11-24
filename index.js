const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Welcome to the Book Category API chloe');
});
app.listen(3000, () => {
console.log('Listening on port 3000');
}); 
// main entry file 


