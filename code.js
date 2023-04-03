var egyik, masik, muvelet;
function gomb(szam){
    document.szgprm.kijelzo.value += szam;
}
function oszt(){
   egyik = document.szgprm.kijelzo.value*1;
   document.szgprm.kijelzo.value = "";
   muvelet = "/"
}
function szoroz(){
   egyik = document.szgprm.kijelzo.value*1;
   document.szgprm.kijelzo.value = "";
   muvelet = "*"
}
function kivon(){
    egyik = document.szgprm.kijelzo.value*1;
    document.szgprm.kijelzo.value = "";
    muvelet = "-"
}
function meg(){
    egyik = document.szgprm.kijelzo.value*1;
    document.szgprm.kijelzo.value = "";
    muvelet = "+"
}
function egyenlo(){
    masik = document.szgprm.kijelzo.value*1;
    var eredmeny = 0;
    if(muvelet == "+"){
        eredmeny = egyik + masik;
    } else if(muvelet == "-"){
        eredmeny = egyik - masik;
    } else if(muvelet == "*"){
        eredmeny = egyik * masik;
    } else if(muvelet == "/"){
        eredmeny = egyik * masik;
    }   
    document.szgprm.kijelzo.value = eredmeny; 
}
function reset(){
    window.location.reload();
}
