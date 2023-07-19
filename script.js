// alert("Update : 5 \n CHANGES : \n * This Update fixes screen sizing issues on almost all devices \n * This update also optimizes the code ");
alert("Update : 7 \n CHANGE-log: \n * This update fixes screen sizing issues on bigger screens like computer and tv .")
alert("Update : 8 \n CHANGE-log: \n * Bug fixes .")
const gameP1 = document.querySelectorAll(".gameImageContainer1")
const gameP2 = document.querySelectorAll(".gameImageContainer2")
const shootSound = new Audio("Sounds/shoot.mp3")
const aboutButton = document.getElementById("about")
const helpButton = document.getElementById("help")
const settingsButton = document.getElementById("settings")
const greetingsDone = document.querySelector("#popup-confirmation")

// Current development status update !! 
alert("UPDATE 7 applied successfully !! ")
alert("UPDATE 8 applied successfully !! ")

// Navbar programming 
Array.from(document.getElementsByClassName("option-element")).forEach((e)=> {
    e.addEventListener('click',()=> {
        alert(`FEATURE COMING SOON :  "${e.textContent}" section is to be updated shortly !!`)
    })
})

// Player 1
Array.from(gameP1).forEach(element=> {
    element.addEventListener('click', ()=> {
        shootSound.play()
        document.querySelector(`#${element.id} img`).src = "Images/char_img_shooting.gif"
        console.log("Image updated !!")
        setTimeout(()=> {
        document.querySelector(`#${element.id} img`).src = "Images/char_img_stable.png"
        console.log("Image reverted !!")
        },900)
    })
})

//Player 2
Array.from(gameP2).forEach(element=> {
    element.addEventListener('click', ()=> {
        shootSound.play()
        document.querySelector(`#${element.id} img`).src = "Images/char_img_shooting.gif"
        console.log("Image updated !!")
        setTimeout(()=> {
        document.querySelector(`#${element.id} img`).src = "Images/char_img_stable.png"
        console.log("Image reverted !!")
        },900)
    })
})

// Current state
let current_state = document.querySelector(".present-sit")
current_state.innerHTML = `<div> HELLO <br> <span style="color:red;font-size:3vw"> This game is still under development !!  </span><span style="font-size:2vw;color:green"><br>But feel free to play around with the characters ... </span></div>`


greetingsDone.addEventListener('click',()=> {
    document.body.querySelector("#welcome-popup").classList.add("inactive")
    document.body.querySelector("#overall-container").classList.add("active")
})
