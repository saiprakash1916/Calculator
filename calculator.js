let display = document.getElementById("screen");

/** Clear the values */
function allclear(){
    display.value = "";
}

/** Show the values in display */
function show(n){
    display.value += n;
}

/** Calculate the values */
function calc(){
    display.value = eval(display.value);
}