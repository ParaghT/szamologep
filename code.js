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
function gyok(){
    egyik = document.szgprm.kijelzo.value*1;
    document.szgprm.kijelzo.value = "";
    muvelet = "√"
}
function negyzet(){
    egyik = document.szgprm.kijelzo.value*1;
    document.szgprm.kijelzo.value = "";
    muvelet = "X2"   
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
    } else if(muvelet == "√"){
        x=Math.sqrt(eval(egyik));
        eredmeny = x;     
    } else if(muvelet == "X2"){
        x=Math.pow(eval(egyik),2);
        eredmeny = x;  

    }
    document.szgprm.kijelzo.value = eredmeny; 
}

function reset(){
    window.location.reload();
}

