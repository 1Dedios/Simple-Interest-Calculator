//targets the slider range to show a number
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}

function checkPrincipal() {
    var num = document.getElementById("principal").value;
    if (num < 1) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}

// compute function fired when button is pressed
function compute(checkprincipal) {
    if (document.getElementById('principal').value < 1) {
        return alert("Enter a postitive number"); // browser alert to enter positive number
    } else {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);
        return document.getElementById("result").innerHTML = "<br> <b>If</b> you deposit " + principal + ",<br> <b>at</b> an interest rate of " + rate + "%.<br> <b>You</b> will receive an amount of " + interest + "<br> <b>in</b> the year " + year;
    }
}
