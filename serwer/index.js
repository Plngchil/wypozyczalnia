const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "wypozyczalnia"
})

const app=express()
app.use(cors())

con.connect((err)=>{
    if(!err){
        console.log("połączono z bazą");
    }else{
        console.log("błąd połączenia z bazą" + err);
    }        
app.get("/samochody", (req,res)=>{
    const sql = "select * from samochody"
    con.query(sql,(err,wynik,info_wynik)=>{
        res.send(wynik)
    })
})
app.get("/dossamochody", (req,res)=>{
    const sql = "select * from samochody where czy_dostepny = 'TAK'"
    con.query(sql,(err,wynik,info_wynik)=>{
        res.send(wynik)
    })
})
app.get("/zamowienie/:marka/:model", (req,res)=>{
    const marka = req.params.marka
    const model = req.params.model
    const sql = `Update samochody set czy_dostepny = 'NIE' where marka = "${marka}" and model = "${model}"`
    con.query(sql,(err,wynik,info_wynik)=>{
        res.send(wynik)
        console.log(err);
    })
})
app.get("/zamowienia", (req,res)=>{
    const sql = "select * from zamowienia"
    con.query(sql,(err,wynik,info_wynik)=>{
        res.send(wynik)
    })
})
app.listen(3000, ()=>{
    console.log("aplikacja działa");
})
})