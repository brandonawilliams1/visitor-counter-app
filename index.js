//counter program

const decreaseBTN = document.getElementById("decreaseBTN");
const increaseBTN = document.getElementById("increaseBTN");
const resetBTN = document.getElementById("resetBTN");
const countLable = document.getElementById("countLable");

// keep track of current count
let count = 0;

// functions for buttons to change the current count

increaseBTN.onclick = function(){
    count++;
    countLable.textContent = count;
};
decreaseBTN.onclick = function(){
    count--;
    countLable.textContent = count;
};
resetBTN.onclick = function(){
    count = 0;
    countLable.textContent = count;
};