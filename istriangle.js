const inputAngles = document.querySelectorAll(".angle-input");
const isTraingleBtn = document.querySelector("#is-traingle-btn");
const outputMsg = document.querySelector("#output-msg")



function calculateSumOfAngles(angle1, angle2, angle3){

    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}
function isTriangle(){
     console.log(inputAngles[0].value);
    if(Number(inputAngles[0].value) && Number(inputAngles[1].value) && Number(inputAngles[2].value)){
        const sumOfAngles  = calculateSumOfAngles(Number(inputAngles[0].value), Number(inputAngles[1].value), Number(inputAngles[2].value));
        console.log(sumOfAngles);
        if(sumOfAngles === 180){
            outputMsg.innerText = "Yay, the angles for a trainge";

        // console.log("Yay, the angles for a trainge");
        }
        else{
            outputMsg.innerText = "Oh oh, the angles dont form a triangle";
            //console.log("Oh oh, the angles dont form a triangle");
        }
    }
    else{
        outputMsg.innerText = "Please input all the angles";
    }
}

isTraingleBtn.addEventListener('click', isTriangle);
