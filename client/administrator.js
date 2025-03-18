    let marka = document.getElementById("marka")
    let model = document.getElementById("model")
    let rok = document.getElementById("rok")
    let cena = document.getElementById("cena")
    let btnDodaj = document.getElementById("dodaj")
    let markaSel = document.getElementById("markaSel")
    let modelSel = document.getElementById("modelSel")
    let butUsun = document.getElementById("butUsun")
    let table = document.querySelector("table")
    async function dodaj(){
        let data = await fetch(`http://localhost:3000/dodawanie/${marka.value}/${model.value}/${rok.value}/${cena.value}`)    
        let tdata = await data.json()
        console.log(tdata);
    }
    async function marki(){
        let data = await fetch(`http://localhost:3000/marki`)
        let tdata = await data.json()
        console.log(tdata)
        for(let i = 0; i<tdata.length; i++){
            let markaOption = document.createElement("option")
            markaOption.innerHTML = tdata[i].marka
            markaOption.value = tdata[i].marka
            markaSel.appendChild(markaOption) 
        }
    }
    marki()
    async function modele(){
        let data = await fetch(`http://localhost:3000/modeleZam/${markaSel.value}`)
        let tdata = await data.json()
        console.log(tdata)
        for(let i = 0; i<tdata.length; i++){
            let modelOption = document.createElement("option")
            modelOption.innerHTML = tdata[i].model
            modelOption.value = tdata[i].model
            modelSel.appendChild(modelOption) 
        }
    }
    async function usuwanie(){
        let data = await fetch(`http://localhost:3000/usun/${markaSel.value}/${modelSel.value}`)
        let tdata = await data.json()
        console.log(tdata)
    }
    async function zamowienia(){
        let data = await fetch(`http://localhost:3000/zamowienia`)
        let tdata = await data.json()
        console.log(tdata)
        table.innerHTML = `
    <tr>
        <th>Identyfikator</th>
        <th>Imie</th>
        <th>Nazwisko</th>
        <th>Marka</th>
        <th>Model</th>
        <th>Rozpoczęcie wypozyczenia</th> 
    </tr>`
    for(let i = 0; i<tdata.length; i++){
        let tr = document.createElement("tr")
        let idtd = document.createElement("td")
        let imietd = document.createElement("td")
        let nazwiskotd = document.createElement("td")
        let markaktd = document.createElement("td")
        let modeltd = document.createElement("td")
        let rozWyptd = document.createElement("td")
        tr.appendChild(idtd)
        tr.appendChild(imietd)
        tr.appendChild(nazwiskotd)
        tr.appendChild(markaktd)
        tr.appendChild(modeltd)
        tr.appendChild(rozWyptd)
        idtd.innerHTML = tdata[i].id
        imietd.innerHTML = tdata[i].marka
        nazwiskotd.innerHTML = tdata[i].model
        markaktd.innerHTML = tdata[i].rok_produkcji
        modeltd.innerHTML = tdata[i].cena_za_dobe
        rozWyptd.innerHTML = tdata[i].czy_dostepny
        table.appendChild(tr)
    }
    }
    markaSel.addEventListener("change",async()=>{
        modelSel.innerHTML = ""
        await modele()
    })
    btnDodaj.addEventListener("click",async ()=>{
        await dodaj()
    });
    document.getElementById("zobaczZam").addEventListener("click",async ()=>{
        await zamowienia()
    })