const toDoInput = document.getElementById("toDoInput");
const submitBtn = document.getElementById("submitBtn")
const list = document.getElementById("list")
const removeBtn = document.getElementById("removeBtn")

// // user types new item into input box 
// // presses submit
// // new item added to end of list

submitBtn.addEventListener("click", ()=>{
    const listItem = document.createElement("li");
    listItem.textContent = toDoInput.value;
    console.log(listItem);
    list.appendChild(listItem);
    toDoInput.value = "";
})

removeBtn.addEventListener("click",()=>{
    const lastLiItem = document.querySelector("li:last-child");
    list.removeChild(lastLiItem)
})

// //-------- Surprise Button-----------------//

const surpriseBtn = document.getElementById("surpriseBtn")
const heading = document.getElementById("heading")

surpriseBtn.addEventListener("click",()=>{
    heading.textContent = "SURPRISE!";

    setTimeout(()=>{
        heading.textContent = ""
    },3000)
}
)


const allListItems = [...document.getElementsByTagName("li")]

// console.log(allListItems)

// allListItems.forEach((listItem)=>{
//     listItem.addEventListener("click",(event)=>{
//         list.removeChild(event.target)
//     })
// })

list.addEventListener("click", (event)=>{
    list.removeChild(event.target);
})

const closeBtn = document.getElementById("closeBtn")
const openBtn = document.getElementById("openBtn")

closeBtn.addEventListener("click", ()=>{
    closeBtn.parentNode.style.display="none";
})

openBtn.addEventListener("click", ()=>{
    openBtn.previousElementSibling.style.display="block";
})