const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    console.log("clicked")
    console.log(inputEl.value)

    let lengthResultFeet = +inputEl.value * 3.28084
    let lengthResultMeters = +inputEl.value / 3.28084
    let volumeResultGallons = +inputEl.value / 3.785
    let volumeResultLiters = +inputEl.value * 3.785
    let massResultPounds = +inputEl.value * 2.2046
    let massResultKilos = +inputEl.value / 2.2046

    lengthEl.innerHTML = `<p>${inputEl.value} meters = ${lengthResultFeet.toFixed(3)} feet | ${inputEl.value} feet = ${lengthResultMeters.toFixed(3)} meters</p>`

    volumeEl.innerHTML = `<p>${inputEl.value} gallons = ${volumeResultGallons.toFixed(3)} liters | ${inputEl.value} liters = ${volumeResultLiters.toFixed(3)} gallons</p>`

    massEl.innerHTML = `<p>${inputEl.value} kilos = ${massResultPounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${massResultKilos.toFixed(3)} kilos</p>`

})