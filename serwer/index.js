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
app.get("/modele/:marka", (req,res)=>{
    const marka = req.params.marka
    const sql = `select model from samochody where marka = "${marka}" and czy_dostepny = 'TAK'`
    con.query(sql,(err,wynik,info_wynik)=>{
        res.send(wynik)
    })
})
app.listen(3000, ()=>{
    console.log("aplikacja działa");
})
})