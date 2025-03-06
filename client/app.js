let table = document.querySelector("table")
let btnWszystkie = document.getElementById("wszystkie")
let btnDostepne = document.getElementById("dostepne")
let modelsel = document.getElementById("model") 
let marka = document.getElementById("marka")
async function getSamochody(){
    let data = await fetch('http://localhost:3000/samochody')
    let tdata = await data.json()
    console.log(tdata);
    table.innerHTML = `
    <tr>
        <th>Identyfikator</th>
            <th>Marka</th>
            <th>Model</th>
            <th>Rok produkcji</th>
            <th>Cena za dobe</th>
            <th>Dostępny</th> 
    </tr>`
    for(let i = 0; i<tdata.length; i++){
        let tr = document.createElement("tr")
        let idtd = document.createElement("td")
        let markatd = document.createElement("td")
        let modeltd = document.createElement("td")
        let roktd = document.createElement("td")
        let cenatd = document.createElement("td")
        let dostepnosctd = document.createElement("td")
        tr.appendChild(idtd)
        tr.appendChild(markatd)
        tr.appendChild(modeltd)
        tr.appendChild(roktd)
        tr.appendChild(cenatd)
        tr.appendChild(dostepnosctd)
        idtd.innerHTML = tdata[i].id
        markatd.innerHTML = tdata[i].marka
        modeltd.innerHTML = tdata[i].model
        roktd.innerHTML = tdata[i].rok_produkcji
        cenatd.innerHTML = tdata[i].cena_za_dobe
        dostepnosctd.innerHTML = tdata[i].czy_dostepny
        table.appendChild(tr)
    }
    btnWszystkie.disabled = true
    btnDostepne.disabled = false
}
async function getDosSamochody(){
        let data = await fetch('http://localhost:3000/dossamochody')
        let tdata = await data.json()
        console.log(tdata);
        table.innerHTML = `
    <tr>
        <th>Identyfikator</th>
            <th>Marka</th>
            <th>Model</th>
            <th>Rok produkcji</th>
            <th>Cena za dobe</th>
            <th>Dostępny</th> 
    </tr>`
        for(let i = 0; i<tdata.length; i++){
            let tr = document.createElement("tr")
            let idtd = document.createElement("td")
            let markatd = document.createElement("td")
            let modeltd = document.createElement("td")
            let roktd = document.createElement("td")
            let cenatd = document.createElement("td")
            let dostepnosctd = document.createElement("td")
            tr.appendChild(idtd)
            tr.appendChild(markatd)
            tr.appendChild(modeltd)
            tr.appendChild(roktd)
            tr.appendChild(cenatd)
            tr.appendChild(dostepnosctd)
            idtd.innerHTML = tdata[i].id
            markatd.innerHTML = tdata[i].marka
            modeltd.innerHTML = tdata[i].model
            roktd.innerHTML = tdata[i].rok_produkcji
            cenatd.innerHTML = tdata[i].cena_za_dobe
            dostepnosctd.innerHTML = tdata[i].czy_dostepny
            table.appendChild(tr)
        }
        btnDostepne.disabled = true
        btnWszystkie.disabled = false
}
async function getMarka(){
    let data  = await fetch(`http://localhost:3000/modele/${marka.value}`)
    let tdata = await data.json()
    console.log(tdata);
    for(let i=0; i<tdata.length; i++){
        let option = document.createElement("option")
        option.value = tdata[i].model
        option.innerHTML = tdata[i].model
        modelsel.appendChild(option)
    }
}
getSamochody()

btnWszystkie.addEventListener("click",async ()=>{
    await getSamochody()
})
btnDostepne.addEventListener("click",async ()=>{
    await getDosSamochody()
})
marka.addEventListener("change", ()=>{
    getMarka()
})