function degerAl() { 
    var isim = document.getElementById("inputbir").value
    document.getElementById("iki").innerHTML=isim.length
    document.getElementById("dort").style.display="block"
    if(isim.length%2===0){
        document.getElementById("uc").innerHTML=" yani ismin çift sayıda karakter içeriyor"
    }else if(isim.typof!=="string"){
        document.getElementById("uc").innerHTML="  lütfen sayı kullanmayın"
    }
        else{
        document.getElementById("uc").innerHTML=" yani ismin tek sayıda karakter içeriyor"
    }
    
}
