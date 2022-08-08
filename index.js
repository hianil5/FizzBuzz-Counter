let count = 0

function fizzbuzz() {
    count++
    document.getElementById("counterH1").innerHTML = count

    if (count % 5 === 0 && count % 3 === 0) {
        document.getElementById("outputPrint").innerHTML = "FizzBuzz"
    }

    else if (count % 3 === 0) {
        document.getElementById("outputPrint").innerHTML = "Fizz"
    }

    else if (count % 5 === 0) {
        document.getElementById("outputPrint").innerHTML = "Buzz"
    } else {
        document.getElementById("outputPrint").innerHTML = count
    }

}
