setTimeout(function() {
    const name = prompt("What is your first name?");
    const welcome = document.getElementById("user");
    welcome.innerHTML = name ? `Welcome, &nbsp;  <span class="gold"> ${name} </span> ! To My Calculator` : `Welcome, Guest!`;
}, Math.floor(Math.random() * 1000) + 1000);

let result; 

function add() {
    removeButtonHighlight();
    var s = document.getElementById("addition");
    s.style.backgroundColor = "orange";
    const num1 = parseFloat(document.getElementsByClassName("input1")[0].value);
    const num2 = parseFloat(document.getElementsByClassName("input2")[0].value);
    result = num1 + num2;
}

function sub() {
    removeButtonHighlight();
    var b = document.getElementById("substraction");
    b.style.backgroundColor = "orange";
    const num1 = parseFloat(document.getElementsByClassName("input1")[0].value);
    const num2 = parseFloat(document.getElementsByClassName("input2")[0].value);
    result = num1 - num2;
}

function mul() {
    removeButtonHighlight();
    var c = document.getElementById("multiplication");
    c.style.backgroundColor = "orange";
    const num1 = parseFloat(document.getElementsByClassName("input1")[0].value);
    const num2 = parseFloat(document.getElementsByClassName("input2")[0].value);
    result = num1 * num2;
}

function div() {
    removeButtonHighlight();
    var d = document.getElementById("division");
    d.style.backgroundColor = "orange";
    const num1 = parseFloat(document.getElementsByClassName("input1")[0].value);
    const num2 = parseFloat(document.getElementsByClassName("input2")[0].value);
    result = num1 / num2;
}

function removeButtonHighlight() {
    var buttons = document.getElementsByClassName("operation-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = ""; // Remove background color
    }
}

function removeButtonHighlight() {
    var buttons = document.querySelectorAll("#addition, #substraction, #multiplication, #division");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "";
    }
}


function p() {
    var s = document.getElementById("addition");
    var b = document.getElementById("substraction");
    var c = document.getElementById("multiplication");
    var d = document.getElementById("division");

    if (s.style.backgroundColor !== "orange" && b.style.backgroundColor !== "orange" && c.style.backgroundColor !== "orange" && d.style.backgroundColor !== "orange") {
        alert('No button is clicked!');
    }

    const output = document.getElementsByClassName("output")[0];
    output.textContent = `The output is: ${result}`;
}
