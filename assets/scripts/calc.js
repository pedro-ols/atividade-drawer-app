function soma() {
    let numA = Number(document.getElementById('numA').value);
    let numB = Number(document.getElementById('numB').value);

    let result = numA + numB;
    document.getElementById("result").innerHTML = result; 
}

function subtract() {
    let numA = Number(document.getElementById('numA').value);
    let numB = Number(document.getElementById('numB').value);

    let result = numA - numB;
    document.getElementById("result").innerHTML = result; 
}

function multiply() {
    let numA = Number(document.getElementById('numA').value);
    let numB = Number(document.getElementById('numB').value);

    let result = numA * numB;
    document.getElementById("result").innerHTML = result; 
}

function divide() {
    let numA = Number(document.getElementById('numA').value);
    let numB = Number(document.getElementById('numB').value);

    let result = numA / numB;
    document.getElementById("result").innerHTML = result; 
}