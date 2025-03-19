let table = document.querySelector("table")
let btnZam = document.getElementById("zobaczZam")
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
    imietd.innerHTML = tdata[i].imie
    nazwiskotd.innerHTML = tdata[i].nazwisko
    markaktd.innerHTML = tdata[i].marka
    modeltd.innerHTML = tdata[i].model
    rozWyptd.innerHTML = tdata[i].rozpoczecie_wypozyczenia
    table.appendChild(tr)
}
}
btnZam.addEventListener("click",async ()=>{
    await zamowienia()
})