function compute() {
    // get the reference to the corresponding html elements
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // check if principal is 0 or less then give alert and focus to principal
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return 0;
    }

    // calculate the amount of interest user will get after the calculated years
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + Number(years);

    // print the result in the browser
    document.getElementById("result").innerHTML = `
    If you deposit <mark>${principal}</mark> </br>
    at an interest rate of <mark>${rate}%</mark>.</br>
    You will recieve an amount of <mark>${interest}</mark> </br>
    in the year </mark>${year}</mark>
    `;
}

// updates the rate when slider's value is changed
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = `${rateval}%`;
}
