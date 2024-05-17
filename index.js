//14-18 félár
//14 alatt ingyenes
// Pótágy -> 16 év a határ és a felett csak teljes árú
// kitöltéskor már szólni a felhasználónak!

const gomb = document.querySelector("#koltsegKalk");
let egyagyas = document.querySelector("#egyagyas");
let ketagyas = document.querySelector("#ketagyas");
let ketagyasEgyPotaggyal = document.querySelector("#ketagyasEgy");
let ketagyasKettoPotaggyal = document.querySelector("#ketagyasKetto");

let koltseg = 0;

gomb.addEventListener("click", () => {
    egyagyas.checked ? koltseg += 9000 : null
    ketagyas.checked ? koltseg += 15000 : null
    //16 életévet be kell töltenie
    ketagyasEgyPotaggyal.checked ? koltseg += potagyEllenorzes(ketagyasEgyPotaggyal) : alert("Be kell töltened a 16. életévet!")
    ketagyasKettoPotaggyal.checked ? koltseg += potagyEllenorzes(ketagyasKettoPotaggyal) : alert("Be kell töltened a 16. életévet!")
    alert(koltseg)



    koltseg = 0;
})
