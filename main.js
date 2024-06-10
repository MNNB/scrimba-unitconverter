const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")

convertBtn.addEventListener("click", function() {
    console.log("clicked")
    console.log(inputEl.value)

    let lengthResult = +inputEl.value * 3.28084
    let volumeResult = +inputEl.value / 3.785
    let massResult = +inputEl.value * 2.2046

    inputEl.value = ""

    console.log(lengthResult.toFixed(3))
    console.log(volumeResult.toFixed(3))
    console.log(massResult.toFixed(3))
})