let markaSel = document.getElementById("markaSel")
let modelSel = document.getElementById("modelSel")
let btnZamow = document.getElementById("zamow")
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
async function zamowienie(){
    let data = await fetch(`http://localhost:3000/zamowienie/${markaSel.value}/${modelSel.value}`)    
    let tdata = await data.json()
    console.log(tdata);
}
async function zamowienieDodaj(){
    let imie = document.getElementById("imie")
    let nazwisko = document.getElementById("nazwisko")
    let data = await fetch(`http://localhost:3000/zamowienieDodaj/${imie.value}/${nazwisko.value}/${markaSel.value}/${modelSel.value}`)    
    let tdata = await data.json()
    console.log(tdata);
}
markaSel.addEventListener("change",async()=>{
    modelSel.innerHTML = ""
    await modele()
})
btnZamow.addEventListener("click",async ()=>{
    await zamowienie()
    await zamowienieDodaj()
    imie.value = ""
    nazwisko.value = ""
    markaSel.innerHTML = ""
    modelSel.innerHTML = ""
    marki()
})
