document.getElementById("calc-body").addEventListener('click', function (e) {

    const typedNumber = e.target.innerText;
    const previousNumber = getNumberById("calc-display");


    if (typedNumber === "C") {
        setNumberById("calc-display", "")
    }
    else if (typedNumber === "Del") {
        const preNumArray = previousNumber.split("");
        console.log(preNumArray);
        preNumArray.pop();
        const newNumArray = preNumArray.join("");
        setNumberById("calc-display", newNumArray)

    }



    else {

        const newNumber = previousNumber + typedNumber;
        setNumberById("calc-display", newNumber)
    }
})