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
vendegEletkor1 = vendegEletkor2 = vendegEletkor3 = vendegEletkor4 = 0;

let koltseg = 0;
let vendegek = 2;

let szoba_tipusa = ""
let ellatas = ""
furdo_szolgaltatasok = "";


let hiba = false;

gomb.addEventListener("click", () => {
    if(egyagyas.checked){
        koltseg += 9000;
        szoba_tipusa = "Egyágyas szoba";
    }

    if(ketagyas.checked){
        koltseg += 15000;
        szoba_tipusa = "Kétágyas szoba";
    }

    if(ketagyasEgyPotaggyal.checked){
        koltseg += 18000;
        szoba_tipusa = "Kétágyas szoba egy pótággyal";
    }

    if(ketagyasKettoPotaggyal.checked){
        koltseg += 21000;
        szoba_tipusa = "Kétágyas szoba kettő pótággyal";
    }

    if(document.querySelector("#reggeli").checked){
        koltseg += 900;
        ellatas = "Reggeli"
    }
    
    if(document.querySelector("#felpanzio").checked){
        koltseg += 2900;
        ellatas = "Félpanzió"
    }

    if(document.querySelector("#teljesPanzio").checked){
        koltseg += 4900;
        ellatas = "Teljes panzió"
    }

    if(document.querySelector("#belteriMedencek").checked){
        koltseg += 800;
        furdo_szolgaltatasok = "Beltéri medencék"
    }

    if(document.querySelector("#kulteriMedencek").checked){
        koltseg += 800;
        furdo_szolgaltatasok = "Kültéri medencék"
    }

    if(document.querySelector("#szauna").checked){
        koltseg += 800;
        furdo_szolgaltatasok = "Szauna belépő"
    }

    if(document.querySelector("#teljesBelepo").checked){
        koltseg += 800;
        furdo_szolgaltatasok = "Teljes belépő"
    }

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

let ketagyasEgyPotaggyalEllenorzes = () => {
    if(ketagyasEgyPotaggyal.checked){


        if(vendegek == 2){
            if(vendegEletkor1 <= 15 || vendegEletkor2 <= 15){
                document.querySelector("#hiba").style.display = "block";
                document.querySelector("#hiba").textContent = "Be kell töltened a 16. életévet!"
            }
        }

        if(vendegek == 3){
            if(vendegEletkor1 <= 15 || vendegEletkor2 <= 15 || vendegEletkor3 <= 15){
                document.querySelector("#hiba").style.display = "block";
                document.querySelector("#hiba").textContent = "Be kell töltened a 16. életévet!"
            }
        }

        if(vendegek == 4){
            if(vendegEletkor1 <= 15 || vendegEletkor2 <= 15 || vendegEletkor3 <= 15 || vendegEletkor4 <= 15){
                document.querySelector("#hiba").style.display = "block";
                document.querySelector("#hiba").textContent = "Be kell töltened a 16. életévet!"
            }
        }

        

    }
}

let ketagyasKetPotaggyalEllenorzes = () => {
    if(ketagyasKettoPotaggyal.checked){

        if(vendegek == 3){
            if(vendegEletkor1 <= 15 || vendegEletkor2 <= 15 || vendegEletkor3 <= 15){
                document.querySelector("#hiba").style.display = "block";
                document.querySelector("#hiba").textContent = "Be kell töltened a 16. életévet!"
            }
        }

        if(vendegek == 4){
            if(vendegEletkor1 <= 15 || vendegEletkor2 <= 15 || vendegEletkor3 <= 15 || vendegEletkor4 <= 15){
                document.querySelector("#hiba").style.display = "block";
                document.querySelector("#hiba").textContent = "Be kell töltened a 16. életévet!"
            }
        }
    }
    
}

let vendekEllenorzes = () => {
    let egyAgyasVendegEllenorzes = () => {
        if(egyagyas.checked || ketagyas.checked){
            if(vendegek == 1){
                //minimum 1 vendég életkora
                if(!vendegEletkor1){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Kérlek add meg az életkorokat!"
                }
                if(vendegEletkor2 || vendegEletkor3 || vendegEletkor4){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Túl sok az adat!"
                }
            }
            if(vendegek == 2){
                //minimum 2 vendég életkora
                if(!vendegEletkor1 || !vendegEletkor2){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Kérlek add meg az életkorokat!"
                }
                if(vendegEletkor3 || vendegEletkor4){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Túl sok az adat!"
                }
            }
            if(vendegek == 3){
                //minimum 3 vendég életkora
                if(!vendegEletkor1 || !vendegEletkor2 || !vendegEletkor3){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Kérlek add meg az életkorokat!"
                }
                if(vendegEletkor4){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Túl sok az adat!"
                }
            }
            if(vendegek == 4){
                //minimum 4 vendég életkora
                if(!vendegEletkor1 || !vendegEletkor2 || !vendegEletkor3 || !vendegEletkor4){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Kérlek add meg az életkorokat!"
                }
            }
        }
    }

    let ketagyasEgyPotaggyalEllenorzes = () => {
        if(ketagyasEgyPotaggyal.checked){
            if(vendegek == 1){
                //minimum 1 vendég életkora
                document.querySelector("#hiba").style.display = "block";
                document.querySelector("#hiba").textContent = "Minimum 2 vendég kötelező!"
            }
            if(vendegek == 2){
                //minimum 2 vendég életkora
                if(!vendegEletkor1 || !vendegEletkor2){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Kérlek add meg az életkorokat!"
                }
                if(vendegEletkor3 || vendegEletkor4){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Túl sok az adat!"
                }
            }
            if(vendegek == 3){
                //minimum 3 vendég életkora
                if(!vendegEletkor1 || !vendegEletkor2 || !vendegEletkor3){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Kérlek add meg az életkorokat!"
                }
                if(vendegEletkor4){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Túl sok az adat!"
                }
            }
            if(vendegek == 4){
                //minimum 4 vendég életkora
                if(!vendegEletkor1 || !vendegEletkor2 || !vendegEletkor3 || !vendegEletkor4){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Kérlek add meg az életkorokat!"
                }
            }
        }
    }


    let ketagyasKetPotaggyalEllenorzes = () => {
        if(ketagyasKettoPotaggyal.checked){
            if(vendegek == 1 || vendegek == 2){
                //minimum 1 vendég életkora
                document.querySelector("#hiba").style.display = "block";
                document.querySelector("#hiba").textContent = "Minimum 3 vendég kötelező!"
            }
            if(vendegek == 3){
                //minimum 3 vendég életkora
                if(!vendegEletkor1 || !vendegEletkor2 || !vendegEletkor3){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Kérlek add meg az életkorokat!"
                }
                if(vendegEletkor4){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Túl sok az adat!"
                }
            }
            if(vendegek == 4){
                //minimum 4 vendég életkora
                if(!vendegEletkor1 || !vendegEletkor2 || !vendegEletkor3 || !vendegEletkor4){
                    document.querySelector("#hiba").style.display = "block";
                    document.querySelector("#hiba").textContent = "Kérlek add meg az életkorokat!"
                }
            }
        }
    }


    egyAgyasVendegEllenorzes();
    ketagyasEgyPotaggyalEllenorzes();
    ketagyasKetPotaggyalEllenorzes();
    
}


this.addEventListener("input", () => {
    document.querySelector("#hiba").textContent = ""
    vendegek = document.querySelector("#vendegekSzama").value
    ketagyasEgyPotaggyalEllenorzes();
    ketagyasKetPotaggyalEllenorzes();
    vendekEllenorzes();
})