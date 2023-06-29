/* WATCH FOR TICKED ITEMS */
var tickElements = document.getElementsByClassName("tick");
var nowElements = document.getElementsByClassName("nowarrow");
var nextElements = document.getElementsByClassName("nextarrow");
var laterElements = document.getElementsByClassName("laterarrow");

console.log(nextElements);

var tickFunction = function() {
    var tickID = this.getAttribute("id");
    tickID = tickID.substring(4);
    console.log("working on: "+tickID);
    var inputValue = document.getElementById("list"+tickID).value;
    document.getElementById("list"+tickID).disabled = "true";
    removeBlanks("now");
    setTimeout(function(){
        document.getElementById("list"+tickID).value = "";
        document.getElementById("list"+tickID).removeAttribute("disabled");
        removeBlanks("now");
        removeBlanks("next");
        removeBlanks("later");
    }, 2000);
    updateValues( tickID, inputValue );
};

var moveToNow = function() {
    var nowID = this.getAttribute("id");
    inputID = nowID.substring(8);
    if(inputID=="splash"){
        getValue = document.getElementById("splashpageinput").value;
    }else{
        getValue = document.getElementById("list"+inputID).value;
    }
    //search next strings for first blank
    var moveSuccess="";
    for(i=1;i<11;i++){
        getNextValue = document.getElementById("listnow"+i).value;
        if(getNextValue==""){
            document.getElementById("listnow"+i).value = getValue;
            if(inputID=="splash"){
                document.getElementById("splashpageinput").value = "";
            }else{
                document.getElementById("list"+inputID).value = "";
            }
            saveValues();
            removeBlanks("now");
            removeBlanks("next");
            removeBlanks("later");
            moveSuccess = 1;
            console.log("item moved");
            break;
        }else{
            moveSuccess = 0;
        }
    }
    if(moveSuccess==0){
        moveError(inputID);
    }
};

var moveToNext = function() {
    var nextID = this.getAttribute("id");
    inputID = nextID.substring(9);
    if(inputID=="splash"){
        getValue = document.getElementById("splashpageinput").value;
    }else{
        getValue = document.getElementById("list"+inputID).value;
    }
    var moveSuccess="";
    //search next strings for first blank
    for(i=1;i<11;i++){
        getNextValue = document.getElementById("listnext"+i).value;
        if(getNextValue==""){
            document.getElementById("listnext"+i).value = getValue;
            if(inputID=="splash"){
                document.getElementById("splashpageinput").value = "";
            }else{
                document.getElementById("list"+inputID).value = "";
            }
            saveValues();
            removeBlanks("now");
            removeBlanks("next");
            removeBlanks("later");
            moveSuccess = 1;
            console.log("item moved");
            break;
        }else{
            moveSuccess = 0;
        }
    }
    if(moveSuccess==0){
        moveError(inputID);
    }
};

var moveToLater = function() {
    var laterID = this.getAttribute("id");
    inputID = laterID.substring(10);
    if(inputID=="splash"){
        getValue = document.getElementById("splashpageinput").value;
    }else{
        getValue = document.getElementById("list"+inputID).value;
    }    
    //search later strings for first blank
    var moveSuccess="";
    for(i=1;i<11;i++){
        getNextValue = document.getElementById("listlater"+i).value;
        if(getNextValue==""){
            document.getElementById("listlater"+i).value = getValue;
            if(inputID=="splash"){
                document.getElementById("splashpageinput").value = "";
            }else{
                document.getElementById("list"+inputID).value = "";
            }
            saveValues();
            removeBlanks("now");
            removeBlanks("next");
            removeBlanks("later");
            moveSuccess = 1;
            console.log("item moved");
            break;
        }else{
            moveSuccess = 0;
        }
    }
    if(moveSuccess==0){
        moveError(inputID);
    }
};

function moveError(item){
    if(item=="splash"){
        document.getElementById("splashpageinput").style.background = "red";
        setTimeout(function(){
            document.getElementById("splashpageinput").style.background = "";
        }, 500);
    }else{
        document.getElementById("list"+item).style.background = "red";
        setTimeout(function(){
            document.getElementById("list"+item).style.background = "";
        }, 500);
    }
}

for (var i = 0; i < tickElements.length; i++) {
    tickElements[i].addEventListener('click', tickFunction, false);
}

for (var i = 0; i < nowElements.length; i++) {
    nowElements[i].addEventListener('click', moveToNow, false);
}
for (var i = 0; i < nextElements.length; i++) {
    nextElements[i].addEventListener('click', moveToNext, false);
}
for (var i = 0; i < laterElements.length; i++) {
    laterElements[i].addEventListener('click', moveToLater, false);
}

function updateChecklistToggle(number){
    chrome.storage.sync.get(['tickID'], function(result){
        console.log("uCT:"+result);
    });
}

function hideAllLists(){
    var listsToHide = document.getElementsByClassName("list-container");
    for( i=0; i<listsToHide.length; i++ ){
        listsToHide[i].style.display = "none";
    }
}

function displayList(list){
    hideAllLists();
    document.getElementById(list).style.display = "inline";
    console.log("showing list: "+list);
}

function changeViewNow() {
    console.log("change view: Now");
    stripActiveListClass();
    addActiveListClass("list-link-now");
    displayList("list-now");
}
function changeViewNext() {
    console.log("change view: Next");
    stripActiveListClass();
    addActiveListClass("list-link-next");
    displayList("list-next");
}
function changeViewLater() {
    console.log("change view: Later");
    stripActiveListClass();
    addActiveListClass("list-link-later");
    displayList("list-later");
}

function stripActiveListClass(){
    var element = document.getElementById("list-link-now");
    element.classList.remove("active-list-header");

    var element = document.getElementById("list-link-next");
    element.classList.remove("active-list-header");

    var element = document.getElementById("list-link-later");
    element.classList.remove("active-list-header");

    console.log("active list classes stripped");
}

function addActiveListClass(list){
    var listID = document.getElementById(list);
    listID.classList.add("active-list-header");
    console.log("active list: "+list);
}

/* SAVE AND UPDATE LIST VALUES */
function updateValues( nName, nValue ){

    for ( const item of fullList ){
        var cName = item;
        var cValue = document.getElementById('list'+item).value;
        window["value"+cName] = { name: cName, value: cValue };
    }

    if( nName == "now1" ){
        valuenow1 = { name: "now1", value: nValue };
    }else if( nName == "now2" ){
        valuenow2 = { name: "now2", value: nValue };
    }else if( nName == "now3" ){
        valuenow3 = { name: "now3", value: nValue };
    }else if( nName == "now4" ){
        valuenow4 = { name: "now4", value: nValue };
    }else if( nName == "now5" ){
        valuenow5 = { name: "now5", value: nValue };
    }else if( nName == "now6" ){
        valuenow6 = { name: "now6", value: nValue };
    }else if( nName == "now7" ){
        valuenow7 = { name: "now7", value: nValue };
    }else if( nName == "now8" ){
        valuenow8 = { name: "now8", value: nValue };
    }else if( nName == "now9" ){
        valuenow9 = { name: "now9", value: nValue };
    }else if( nName == "now10" ){
        valuenow10 = { name: "now10", value: nValue };
    }else if( nName == "next1" ){
        valuenext1 = { name: "next1", value: nValue };
    }else if( nName == "next2" ){
        valuenext2 = { name: "next2", value: nValue };
    }else if( nName == "next3" ){
        valuenext3 = { name: "next3", value: nValue };
    }else if( nName == "next4" ){
        valuenext4 = { name: "next4", value: nValue };
    }else if( nName == "next5" ){
        valuenext5 = { name: "next5", value: nValue };
    }else if( nName == "next6" ){
        valuenext6 = { name: "next6", value: nValue };
    }else if( nName == "next7" ){
        valuenext7 = { name: "next7", value: nValue };
    }else if( nName == "next8" ){
        valuenext8 = { name: "next8", value: nValue };
    }else if( nName == "next9" ){
        valuenext9 = { name: "next9", value: nValue };
    }else if( nName == "next10" ){
        valuenext10 = { name: "next10", value: nValue };
    }else if( nName == "later1" ){
        valuelater1 = { name: "later1", value: nValue };
    }else if( nName == "later2" ){
        valuelater2 = { name: "later2", value: nValue };
    }else if( nName == "later3" ){
        valuelater3 = { name: "later3", value: nValue };
    }else if( nName == "later4" ){
        valuelater4 = { name: "later4", value: nValue };
    }else if( nName == "later5" ){
        valuelater5 = { name: "later5", value: nValue };
    }else if( nName == "later6" ){
        valuelater6 = { name: "later6", value: nValue };
    }else if( nName == "later7" ){
        valuelater7 = { name: "later7", value: nValue };
    }else if( nName == "later8" ){
        valuelater8 = { name: "later8", value: nValue };
    }else if( nName == "later9" ){
        valuelater9 = { name: "later9", value: nValue };
    }else if( nName == "later10" ){
        valuelater10 = { name: "later10", value: nValue };
    }

    chrome.storage.sync.set( { inputValues : [ 
        valuenow1,valuenow2,valuenow3,valuenow4,valuenow5,valuenow6,valuenow7,valuenow8,valuenow9,valuenow10,
        valuenext1,valuenext2,valuenext3,valuenext4,valuenext5,valuenext6,valuenext7,valuenext8,valuenext9,valuenext10,
        valuelater1,valuelater2,valuelater3,valuelater4,valuelater5,valuelater6,valuelater7,valuelater8,valuelater9,valuelater10
    ] }, function(){
        console.log("Values updated");
    } );
    
}

function saveValues(){
    for ( const item of fullList ){
        var cName = item;
        var cValue = document.getElementById('list'+item).value;
        window["value"+cName] = { name: cName, value: cValue };
    }

    chrome.storage.sync.set( { inputValues : [ 
        valuenow1,valuenow2,valuenow3,valuenow4,valuenow5,valuenow6,valuenow7,valuenow8,valuenow9,valuenow10,
        valuenext1,valuenext2,valuenext3,valuenext4,valuenext5,valuenext6,valuenext7,valuenext8,valuenext9,valuenext10,
        valuelater1,valuelater2,valuelater3,valuelater4,valuelater5,valuelater6,valuelater7,valuelater8,valuelater9,valuelater10 
    ] }, function(){
        console.log("Values saved");
    } );

}

function removeBlanks(list){
    console.log("doing some tidying");
    for(i=1;i<10;i++){
        getValue = document.getElementById("list"+list+i).value;
        getNextValue = document.getElementById("list"+list+(i+1)).value;
        if(getValue==""){
            document.getElementById("list"+list+i).value = getNextValue;
            document.getElementById("list"+list+(i+1)).value = "";
        }
    }
    saveValues();
}