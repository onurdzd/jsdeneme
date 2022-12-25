for(i=1 ; i<10 ; i++){
    document.getElementById("bes").innerHTML+=i + " "
}
var say=1

while(say<5){
    say=say+1
    console.log("çalışıyor" , say)
}

function exerciseTwo(){
    let count = 0
    for(var i = 0 ; i<46 ; i++){
        document.getElementById("yedi").innerHTML+=count + " "
        count = count + 2
    }
}

exerciseTwo()