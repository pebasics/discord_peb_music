const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('PC and Electronic Basics is Alive!'));

app.listen(port, () => console.log(`PC and Electronic Basics is listening to http://localhost:${port}`));
