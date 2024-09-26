

var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

var count = 0;

function setcounterText () {
countEl.textContent = count;
}

incrementEl.addEventListener("click", function(){
    count ++;
    setcounterText();
});

decrementEl.addEventListener("click", function(){
    if(count > 0){
        count --;
        setcounterText();
    }
});

