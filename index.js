let trueCounter = 0;
let falseCounter = 0;
let emptyCounter = 0;

document.getElementById("trueplus").addEventListener("click", function () {
    trueCounter++;
    document.getElementById("truecounter").textContent = trueCounter;
});
// True 
document.getElementById("truesub").addEventListener("click", function () {
    if (trueCounter > 0) {
        trueCounter--;
        document.getElementById("truecounter").textContent = trueCounter;
    }
});

document.getElementById("trueplusfive").addEventListener("click", function () {
    trueCounter += 5;
    document.getElementById("truecounter").textContent = trueCounter;
});

document.getElementById("truesubfive").addEventListener("click", function () {
    if (trueCounter - 5 >= 0) { 
        trueCounter -= 5;
        document.getElementById("truecounter").textContent = trueCounter;
    } else {
        trueCounter = 0; 
        document.getElementById("truecounter").textContent = trueCounter;
    }
});


// False 
document.getElementById("falseplus").addEventListener("click", function () {
    falseCounter++;
    document.getElementById("falsecounter").textContent = falseCounter;
});

document.getElementById("falsesub").addEventListener("click", function () {
    if (falseCounter > 0) {
        falseCounter--;
        document.getElementById("falsecounter").textContent = falseCounter;
    }
});
document.getElementById("falseplusfive").addEventListener("click", function () {
    falseCounter += 5;
    document.getElementById("falsecounter").textContent = falseCounter;
});

document.getElementById("falsesubfive").addEventListener("click", function () {
    if (falseCounter - 5 >= 0) { 
        falseCounter -= 5;
        document.getElementById("falsecounter").textContent = falseCounter;
    } else {
        falseCounter = 0; 
        document.getElementById("falsecounter").textContent = falseCounter;
    }
  
});

// Empty 
document.getElementById("emptyplus").addEventListener("click", function () {
    emptyCounter++;
    document.getElementById("emptycounter").textContent = emptyCounter;
});

document.getElementById("emptysub").addEventListener("click", function () {
    if (emptyCounter > 0) {
        emptyCounter--;
        document.getElementById("emptycounter").textContent = emptyCounter;
    }
});
document.getElementById("emptyplusfive").addEventListener("click", function () {
    emptyCounter += 5;
    document.getElementById("emptycounter").textContent = emptyCounter;
});

document.getElementById("emptysubfive").addEventListener("click", function () {
    if (emptyCounter - 5 >= 0) { 
        emptyCounter -= 5;
        document.getElementById("emptycounter").textContent = emptyCounter;
    } else {
        emptyCounter = 0; 
        document.getElementById("emptycounter").textContent = emptyCounter;
    }
});

document.getElementById("reset").addEventListener("click", function () {
    trueCounter = 0;
    falseCounter = 0;
    emptyCounter = 0;
    document.getElementById("truecounter").textContent = trueCounter;
    document.getElementById("falsecounter").textContent = falseCounter;
    document.getElementById("emptycounter").textContent = emptyCounter;

});