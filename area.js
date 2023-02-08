const base = document.querySelector("#base");
const height = document.querySelector("#height");

const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");


function cheackArea(){
    if(base.value && height.value){
        const area = 0.5 * (base.value * height.value);
        console.log(area);
        output.innerText = "The area of triangle is " + area.toFixed(2); 
    }
    else{
        output.innerText = "Height and Base should be greater than 0"
    }
}

areaBtn.addEventListener('click', cheackArea);