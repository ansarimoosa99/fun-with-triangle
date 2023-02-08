const sideInputs = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputMsg  = document.querySelector("#output");


function calculateHypotenuse(){
    var hypotenuse = 0;
    const side1 = sideInputs[0].value;
    const side2 = sideInputs[1].value;
    if(side1&&side2){
         hypotenuse =  Math.sqrt(Math.pow(side1,2) + Math.pow(side2,2));
         outputMsg.innerText = "The length of hypotenuse is " + hypotenuse.toFixed(2);
        //  console.log(hypotenuse.toFixed(2));
    }else{
        outputMsg.innerText = "The length of sides should be greater than 0";
        // console.log("side should be greater than 0");
    }
    
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);

