//14-18 félár
//14 alatt ingyenes
// Pótágy -> 16 év a határ és a felett csak teljes árú
// kitöltéskor már szólni a felhasználónak!

const gomb = document.querySelector("#koltsegKalk");
let egyagyas = document.querySelector("#egyagyas");
let ketagyas = document.querySelector("#ketagyas");
let ketagyasEgyPotaggyal = document.querySelector("#ketagyasEgy");
let ketagyasKettoPotaggyal = document.querySelector("#ketagyasKetto");

let vendegEletkor1, vendegEletkor2, vendegEletkor3, vendegEletkor4;

let koltseg = 0;
let hiba = false;
let vendegek = 2;

gomb.addEventListener("click", () => {
    egyagyas.checked ? koltseg += 9000 : null
    ketagyas.checked ? koltseg += 15000 : null
    //16 életévet be kell töltenie

    ketagyasEgyPotaggyal.checked ? koltseg += potagyEllenorzes(ketagyasEgyPotaggyal) : alert("Be kell töltened a 16. életévet!")
    ketagyasKettoPotaggyal.checked ? koltseg += potagyEllenorzes(ketagyasKettoPotaggyal) : alert("Be kell töltened a 16. életévet!")
    alert(koltseg)



    koltseg = 0;
})


let vendegEletkorAllitas = (input) => {
    document.querySelector("#hiba").style.display = "none";
    vendegEletkor1 = document.querySelector("#v1").value;
    vendegEletkor2 = document.querySelector("#v2").value;
    vendegEletkor3 = document.querySelector("#v3").value;
    vendegEletkor4 = document.querySelector("#v4").value;
}





let egyagyasEllenorzes = () => {
    if(egyagyas.checked){
        if(vendegek == 1){
            document.querySelector("#hiba").style.display = "block";
            document.querySelector("#hiba").textContent = "Túl sok az adat!"
            
        }

        if( (vendegek == 2 && !vendegEletkor2) || (vendegek == 3 && !vendegEletkor2 || !vendegEletkor3)
            || (vendegek == 4 && !vendegEletkor2 && !vendegEletkor3 && !vendegEletkor4) ){
            document.querySelector("#hiba").style.display = "block";
            document.querySelector("#hiba").textContent = "Kérlek add meg az életkorokat!"
        }
    }
}

let ketagyasEllenorzes = () => {
    if(ketagyas.checked){
        if(vendegEletkor3 || vendegEletkor4){
            document.querySelector("#hiba").style.display = "block";
            document.querySelector("#hiba").textContent = "Túl sok az adat!"
        }

        if(!vendegEletkor1 || !vendegEletkor2){
            document.querySelector("#hiba").style.display = "block";
            document.querySelector("#hiba").textContent = "Kérlek add meg az életkorokat!"
        }
    }
}

let ketagyasEgyPotaggyalEllenorzes = () => {
    if(ketagyasEgyPotaggyal.checked){

        if(vendegEletkor1 <= 15 || vendegEletkor2 <= 15 || vendegEletkor3 <= 15){
            document.querySelector("#hiba").style.display = "block";
            document.querySelector("#hiba").textContent = "Be kell töltened a 16. életévet!"
        }

        if(vendegEletkor4){
            document.querySelector("#hiba").style.display = "block";
            document.querySelector("#hiba").textContent = "Túl sok az adat!"
        }

        if(!vendegEletkor1 || !vendegEletkor2 || !vendegEletkor3){
            document.querySelector("#hiba").style.display = "block";
            document.querySelector("#hiba").textContent = "Kérlek add meg az életkorokat!"
        }
    }
}

let ketagyasKetPotaggyalEllenorzes = () => {
    if(ketagyasKettoPotaggyal.checked){

        if(vendegEletkor1 <= 15 || vendegEletkor2 <= 15 || vendegEletkor3 <= 15 || vendegEletkor4 <= 15){
            document.querySelector("#hiba").style.display = "block";
            document.querySelector("#hiba").textContent = "Be kell töltened a 16. életévet!"
        }
    
        if(!vendegEletkor1 || !vendegEletkor2 || !vendegEletkor3 || !vendegEletkor4){
            document.querySelector("#hiba").style.display = "block";
            document.querySelector("#hiba").textContent = "Kérlek add meg az életkorokat!"
        }
    }
    
}


this.addEventListener("input", () => {
    document.querySelector("#hiba").textContent = ""
    vendegek = document.querySelector("#vendegekSzama").value
    egyagyasEllenorzes();
    ketagyasEllenorzes();
    ketagyasEgyPotaggyalEllenorzes();
    ketagyasKetPotaggyalEllenorzes();
})