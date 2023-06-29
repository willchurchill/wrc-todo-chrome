/* DEFINE THE FULL LIST OF TODOS */
fullList = [
    "now1","now2","now3","now4","now5","now6","now7","now8","now9","now10",
    "next1","next2","next3","next4","next5","next6","next7","next8","next9","next10",
    "later1","later2","later3","later4","later5","later6","later7","later8","later9","later10",    
];

window.onload=function(){

    // Event Listeners
    const elsave = document.getElementById("site-container");
    elsave.addEventListener("click", saveValues);

    const nowView = document.getElementById("list-link-now");
    nowView.addEventListener("click", changeViewNow);
    const nextView = document.getElementById("list-link-next");
    nextView.addEventListener("click", changeViewNext);
    const laterView = document.getElementById("list-link-later");
    laterView.addEventListener("click", changeViewLater);

    // Other load tasks
    fillListItems();
    //changeViewNow();
}

function fillListItems(){

    chrome.storage.sync.get( ["inputValues"], function(result){
        
        console.log("Full values: ");
        console.log(result);
        console.log("/end full values");

        for ( i=0; i<30; i++ ){
            var listName = "list"+result.inputValues[i].name;
            var listValue = result.inputValues[i].value;
            // console.log(listName+" "+listValue);
            document.getElementById(listName).value = listValue;
        }
        
    } );
    
}

