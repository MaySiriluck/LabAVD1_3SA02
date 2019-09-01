// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

express = opeRand = (ops) => {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var sum = 0;
    if (ops == "Sum")
        {
            sum = Number(a)+Number(b);
            document.getElementById("add").innerHTML="+";
            alert('Answer: ' +sum);
        }
    else if (ops == "Min")
        {
            sum = Number(a)-Number(b);
            document.getElementById("add").innerHTML="-";
            alert('Answer: ' +sum); 
        }
    else if (ops == "Mul")
        {
            sum = Number(a)*Number(b);
            document.getElementById("add").innerHTML="x";
            alert('Answer: ' +sum);
        }
    else if (ops == "Div")
        {
            sum = Number(a)/Number(b);
            document.getElementById("add").innerHTML="/";
            alert('Answer: ' +sum);
        }
    }