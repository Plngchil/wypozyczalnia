    let marka = document.getElementById("marka")
    let model = document.getElementById("model")
    let rok = document.getElementById("rok")
    let cena = document.getElementById("cena")
    let btnDodaj = document.getElementById("dodaj")
    let table = document.querySelector("table")
    async function dodaj(){
        let data = await fetch(`http://localhost:3000/dodawanie/${marka.value}/${model.value}/${rok.value}/${cena.value}`)    
        let tdata = await data.json()
        console.log(tdata);
    }
    btnDodaj.addEventListener("click",async ()=>{
        await dodaj()
        alert("Dodano ofertę")
    });
