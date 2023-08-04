const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'))
});

app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/notes.html'))
});

app.get('/api/notes', (req,res)=>{
    const dbjson =JSON.parse(fs.readFileSync("db/db.json"));
    res.json(dbjson);
});

app.post('/api/notes', (req,res)=>{
    const dbjson = JSON.parse(fs.readFileSync('db/db.json'));
    const newnotes = {
        title: req.body.title,
        text: req.body.text,
    };
    dbjson.push(newnotes);
    fs.writeFileSync('db/db.json', JSON.stringify(dbjson));
    res.json(dbjson);
});


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);