var listNowOutput = "";
for(let i=1; i<11; i++){
    listNowOutput += "<tr><td><input name=\"listnow"+i+"\" id=\"listnow"+i+"\" class=\"listinput inputlist"+i+"\"></td><td><img src=\"assets/images/blue-tick.png\" class=\"tick\" id=\"ticknow"+i+"\" alt=\"Complete task\"></td><td><img src=\"assets/images/chevron-right.png\" class=\"nextarrow\" id=\"nextarrownow"+i+"\" alt=\"Move task to Next\"></td><td><img src=\"assets/images/chevron-double-right.png\" class=\"laterarrow\" id=\"laterarrownow"+i+"\" alt=\"Move task to Later\"></td></tr>";
}
document.getElementById("listNowOutput").innerHTML = listNowOutput;

var listNextOutput = "";
for(let i=1; i<11; i++){
    listNextOutput += "<tr><td><input name=\"listnext"+i+"\" id=\"listnext"+i+"\" class=\"listinput inputlist"+i+"\"></td><td><img src=\"assets/images/blue-tick.png\" class=\"tick\" id=\"ticknext"+i+"\" alt=\"Complete task\"></td><td><img src=\"assets/images/chevron-down.png\" class=\"nowarrow\" id=\"nowarrownext"+i+"\" alt=\"Move task to Now\"></td><td><img src=\"assets/images/chevron-double-right.png\" class=\"laterarrow\" id=\"laterarrownext"+i+"\" alt=\"Move task to Later\"></td></tr>";
}
document.getElementById("listNextOutput").innerHTML = listNextOutput;

var listLaterOutput = "";
for(let i=1; i<11; i++){
    listLaterOutput += "<tr><td><input name=\"listlater"+i+"\" id=\"listlater"+i+"\" class=\"listinput inputlist"+i+"\"></td><td><img src=\"assets/images/blue-tick.png\" class=\"tick\" id=\"ticklater"+i+"\" alt=\"Complete task\"></td><td><img src=\"assets/images/chevron-down.png\" class=\"nowarrow\" id=\"nowarrowlater"+i+"\" alt=\"Move task to Now\"></td><td><img src=\"assets/images/chevron-right.png\" class=\"nextarrow\" id=\"nextarrowlater"+i+"\" alt=\"Move task to Next\"></td></tr>";
}
document.getElementById("listLaterOutput").innerHTML = listLaterOutput;

var splashPageOutput = "<input name=\"splashpageinput\" id=\"splashpageinput\" class=\"splashinput\">";
splashPageOutput += "<br/>";
splashPageOutput += "<img src=\"assets/images/chevron-down.png\" class=\"nowarrow splasharrow\" id=\"nowarrowsplash\" alt=\"Now\"><img src=\"assets/images/chevron-right.png\" class=\"nextarrow splasharrow\" id=\"nextarrowsplash\" alt=\"Next\"><img src=\"assets/images/chevron-double-right.png\" class=\"laterarrow splasharrow\" id=\"laterarrowsplash\" alt=\"Later\">";
document.getElementById("splashPageOutput").innerHTML = splashPageOutput;
