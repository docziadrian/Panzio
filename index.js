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

let erkezes = "";
let tavozas = "";

let szoba_tipusa = ""
let ellatas = ""
furdo_szolgaltatasok = "";

let belteri = kulteri = szauna = teljes = false;
let hiba = false;


let napok_szama;
let entry;



let datumKorrigalas = () => {

    let months = ["Jan", "Feb", "Márc", "Ápr", "Máj", "Jún", "Júl",
         "Aug", "Szept", "Okt", "Nov", "Dec"];
        
    let days = ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"];


    erkezesD = new Date(document.querySelector("#erkezes").value);
    tavozasD = new Date(document.querySelector("#tavozas").value);

    napok_szama = tavozasD.getDay() - erkezesD.getDay();
    
    

    erkezes = `${erkezesD.getFullYear()}.${months[erkezesD.getMonth()]}.${erkezesD.getDate()} ${days[erkezesD.getDay()]}`
    tavozas = `${tavozasD.getFullYear()}.${months[tavozasD.getMonth()]}.${tavozasD.getDate()} ${days[tavozasD.getDay()]}`

    
    
}

let datumEllenorzes = () => {
    if(!document.querySelector("#erkezes").value){
        return false;
    }
    if(!document.querySelector("#tavozas").value){
        return false;
    }

    erkezesD = new Date(document.querySelector("#erkezes").value);
    tavozasD = new Date(document.querySelector("#tavozas").value);

    if(tavozasD.getTime() < erkezesD.getTime()){
        return false;
    }

    return true;
}


gomb.addEventListener("click", () => {
    if(datumEllenorzes()){
        
    
        vendegek = document.querySelector("#vendegekSzama").value
        document.querySelector("#vendegekVeg").innerHTML = vendegek;
        datumKorrigalas()


        if(egyagyas.checked){
            koltseg += (napok_szama)*9000;
            szoba_tipusa = "Egyágyas szoba";
        }

        if(ketagyas.checked){
            koltseg += (napok_szama)*15000;
            szoba_tipusa = "Kétágyas szoba";
        }

        if(ketagyasEgyPotaggyal.checked){
            koltseg += (napok_szama)*18000;
            szoba_tipusa = "Kétágyas szoba egy pótággyal";
        }

        if(ketagyasKettoPotaggyal.checked){
            koltseg += (napok_szama)*21000;
            szoba_tipusa = "Kétágyas szoba kettő pótággyal";
        }

        document.querySelector("#szobaVeg").innerHTML = szoba_tipusa;

        if(document.querySelector("#reggeli").checked){
            koltseg += ((napok_szama)*900)*vendegek;
            ellatas = "Reggeli"
        }
        
        if(document.querySelector("#felpanzio").checked){
            koltseg += ((napok_szama)*2900)*vendegek;
            ellatas = "Félpanzió"
        }

        if(document.querySelector("#teljesPanzio").checked){
            koltseg += ((napok_szama)*4900)*vendegek;
            ellatas = "Teljes panzió"
        }

        document.querySelector("#ellatasVeg").innerHTML = ellatas;

        if(document.querySelector("#belteriMedencek").checked){
            koltseg += ((napok_szama)*800)*vendegek;
            furdo_szolgaltatasok = "Beltéri medencék"
            entry = document.createElement('li');
            entry.appendChild(document.createTextNode(furdo_szolgaltatasok));
            document.querySelector("#igenyeltSzolgVeg").appendChild(entry);
        }

        if(document.querySelector("#kulteriMedencek").checked){
            koltseg += ((napok_szama)*800)*vendegek;
            furdo_szolgaltatasok = "Kültéri medencék"
            entry = document.createElement('li');
            entry.appendChild(document.createTextNode(furdo_szolgaltatasok));
            document.querySelector("#igenyeltSzolgVeg").appendChild(entry);
            
        }

        if(document.querySelector("#szauna").checked){
            koltseg += ((napok_szama)*800)*vendegek;
            furdo_szolgaltatasok = "Szauna belépő"
            entry = document.createElement('li');
            entry.appendChild(document.createTextNode(furdo_szolgaltatasok));
            document.querySelector("#igenyeltSzolgVeg").appendChild(entry);
            
        }

        if(document.querySelector("#teljesBelepo").checked){
            koltseg += ((napok_szama)*2000)*vendegek;
            furdo_szolgaltatasok = "Teljes belépő"
            entry = document.createElement('li');
            entry.appendChild(document.createTextNode(furdo_szolgaltatasok));
            document.querySelector("#igenyeltSzolgVeg").appendChild(entry);
        }

        document.querySelector("#osszegVeg").innerHTML = koltseg;
        

        eredmenyKiiratas();
        koltseg = 0;
    }else{
        alert("Kérlek érvényes érkezési és távozási dátumot adj meg!")
    }
})

let eredmenyKiiratas = () => {
    document.querySelector(".rendeles").style.display = "flex";
    document.querySelector("#erkezesVeg").innerHTML = erkezes;
    document.querySelector("#tavozasVeg").innerHTML = tavozas;
}


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