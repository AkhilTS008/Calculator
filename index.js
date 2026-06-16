const display = document.getElementById('display');

function addToDisplay(input){
    display.value += input;

}

function calDisplay(){

    try{
         display.value = eval(display.value);
    }
    catch(error){
        display.value= "Error";
    }

   


    
}

function clearDisplay(){

    display.value= "";
    
}