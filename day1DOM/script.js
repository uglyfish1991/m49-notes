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

// --------------- Activity 2 --------------------

const changingImage = document.getElementById("changingImage")
const imageSource = document.getElementById("imageSource")
const submitSourceBtn = document.getElementById("submitSource")

submitSourceBtn.addEventListener("click",()=>{
    changingImage.src = imageSource.value; 
})