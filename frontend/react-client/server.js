/*
Simple static server for this skeleton. After running `npm install`, run:
node server.js
Then open http://localhost:3000
This is a placeholder so the folder can be run quickly if desired.
*/
const express = require('express') ;
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));
app.get('*', (req,res)=> res.sendFile(path.join(__dirname,'public','index.html')));
app.listen(3000, ()=> console.log('React skeleton serving at http://localhost:3000'));
