const api_r = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

router.get('/api/notes', (req,res)=>{
    const dbjson =JSON.parse(fs.readFileSync("db/db.json"));
    res.json(dbjson);
});

router.post('/api/notes', (req,res)=>{
    const dbjson = JSON.parse(fs.readFileSync('db/db.json'));
    const newnotes = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };
    dbjson.push(newnotes);
    fs.writeFileSync('db/db.json', JSON.stringify(dbjson));
    res.json(dbjson);
});


module.exports = api_r