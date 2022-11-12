function parzysta(){
    var x = document.getElementById("zad1").value;

    if(x == 0){
        alert("Zero nie jest liczbą parzystą");
    }else{
    if(x % 2 == 0 ){
        document.getElementById("odp1").innerHTML = "liczba " + x + " jest parzysta";
    }else{
        document.getElementById("odp1").innerHTML = "liczba " + x + " nie jest parzysta";
    }
}

}

function powtorz_string(){
    var x = document.getElementById("zad2a").value;
    var y = document.getElementById("zad2b").value;
    var z = x.repeat(y)
    document.getElementById("odp2").innerHTML = z; 

}

function zmiana_stopni(){
    var temp = parseInt(document.getElementById("zad3").value); 
    var x1 = document.getElementById("x1").checked;
    var x2 = document.getElementById("x2").checked;
    var y1 = document.getElementById("y1").checked;
    var y2 = document.getElementById("y2").checked;

    console.log(x1);

    if(x1 == true && y2 == true ){
        z = 2*temp+32
        document.getElementById("odp5").innerHTML = "Celcjusz na Fahrenheity wynosi: " + z + "F";
    }
    if(x1 == true && y1 == true ){
        z = temp
        document.getElementById("odp5").innerHTML = "Celcjusz na Celcjusz wynosi: " + z + "°C";
    }
    if(x2 == true && y1 == true ){
        z = (temp-32)/2
        document.getElementById("odp5").innerHTML ="Fahrenheit na Celcjusz wynosi: " + z + "°C";
    }
    if(x2 == true && y2 == true ){
        z = temp
        document.getElementById("odp5").innerHTML = "Fahrenheit na Fahrenheit wynosi: " + z + "F";
    }
}

function silnia(){
    var x = document.getElementById("zad4").value;
    var silnia = 1;
    for(var i = x; i>1; i--){
        silnia *= i
    }
    document.getElementById("odp4").innerHTML = "silnia z liczby: " + x + " to " + silnia;
}