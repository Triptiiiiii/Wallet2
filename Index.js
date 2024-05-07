document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const keys = document.querySelectorAll(".keys button");

    let currentVal = "0";
    let operator = "";
    let prevVal = "";
    let result = "";

    function updateDisplay() {
        display.value = currentVal;
    }

    keys.forEach(key => {
        key.addEventListener("click", function() {
            const keyValue = this.textContent;

            if (!isNaN(keyValue) || keyValue === ".") {
                if (currentVal === "0" || operator !== "") {
                    currentVal = "";
                }

                currentVal += keyValue;
            } else if (keyValue === "C") {
                currentVal = "0";
                prevVal = "";
                operator = "";
                result = "";
            } else if (keyValue === "=") {
                if (prevVal !== "") {
                    switch (operator) {
                        case "+":
                            result = parseFloat(prevVal) + parseFloat(currentVal);
                            break;
                        case "-":
                            result = parseFloat(prevVal) - parseFloat(currentVal);
                            break;
                        case "*":
                            result = parseFloat(prevVal) * parseFloat(currentVal);
                            break;
                        case "/":
                            result = parseFloat(prevVal) / parseFloat(currentVal);
                            break;
                        default:
                            break;
                    }
                }
                currentVal = result.toString();
                prevVal = "";
                operator = "";
            } else {
                if (operator === "") {
                    prevVal = currentVal;
                    currentVal = "";
                }
                operator = keyValue;
            }

            updateDisplay();
        });
    });
});
