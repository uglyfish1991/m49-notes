const fishButton = document.getElementById("fishButton");
const fishImage = document.getElementById("fishImage");

fishButton.addEventListener("click",()=>{
    fishImage.classList.toggle("hidden");
    if (fishImage.classList.contains("hidden")){
        fishButton.textContent = "Show Fish"
    } else {
        fishButton.textContent = "Hide Fish";
    }

})

const changingImage = document.getElementById("changingImage")
const imageSource = document.getElementById("imageSource")
const submitSourceBtn = document.getElementById("submitSource")

submitSourceBtn.addEventListener("click",()=>{
    changingImage.src = imageSource.value; 
})

// --------------- Activity 3 --------------------

const colourHeading = document.getElementById("colourHeading")

const colourInput = document.getElementById("colourInput")

const colourSubmit = document.getElementById("colourSubmit")

console.log(colourInput)
// user types colour into box 

// user presses submit 

// heading changes colour to what user typed

colourSubmit.addEventListener("click", ()=>{
    colourHeading.style.color = colourInput.value;

    if (colourHeading.style.color ===""){
        alert("That is not a valid colour! Try again")
    }
})

// --------------- Activity 4 --------------------