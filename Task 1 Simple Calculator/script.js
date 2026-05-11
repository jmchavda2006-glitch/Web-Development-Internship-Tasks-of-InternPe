const display = document.getElementById('display');

function appendValue(val) {
    if (display.value === "0") {
        display.value = val;
    } else {
        display.value += val;
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Evaluate the string expression
        let result = eval(display.value);
        display.value = Number.isInteger(result) ? result : result.toFixed(4).replace(/\.?0+$/, "");
    } catch (e) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}

function negateValue() {
    if (display.value !== "") {
        display.value = (parseFloat(display.value) * -1).toString();
    }
}

function copyToClipboard() {
    if (display.value) {
        navigator.clipboard.writeText(display.value);
        const originalVal = display.value;
        display.value = "Copied!";
        setTimeout(() => { display.value = originalVal; }, 800);
    }
}
function toggleAbout() {
    const card = document.getElementById('about-card');
    if (card.style.display === "block") {
        card.style.display = "none";
    } else {
        card.style.display = "block";
    }
}