

// EVENT LISTENER HOOKS UP ROLL DIE UP WITH GENERATOR
document.querySelector(`#roll-die`).addEventListener(`click`, (e) => {
// GRABS WORKOUT DATABASE AND GENERATES A RANDOM WORKOUT PROPERTY FROM THE ARRAY
fetch("http://localhost:3000/workouts")
.then(res => res.json())
.then(workOuts => getRandomWorkout(workOuts))
const getRandomWorkout = (workOuts) => { 
    if (!Array.isArray(workOuts) || workOuts.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * workOuts.length);
    const generatedWorkOut = workOuts[randomIndex];
    const circuitList = document.querySelector(`#current-circuit`)
    const newP = document.createElement(`li`)

    const workoutImg = document.createElement(`img`)
    workoutImg.style.height = `200px`
    workoutImg.src = generatedWorkOut.img
    
    newP.innerText = generatedWorkOut.workout
    newP.setAttribute(`class`, `current`)
    circuitList.appendChild(newP)


    // SET TIMEOUT WORKS, MAKE SURE THE TIMEOUT IS SET TO 8000 BY DEFAULT WHEN PRESENTING
const imgSpan = document.createElement(`span`)
imgSpan.append(workoutImg)
newP.append(imgSpan)


setTimeout(() => {
    workoutImg.remove();
}, 5000);
    
}

})




// CLEARS CURRENT CIRCUIT BUTTON
const circuitList = document.body.querySelector(`#current-circuit`)
const clearButton = document.body.querySelector(`#clear-circuit`)
clearButton.addEventListener(`click`, () => {
    console.log(`i am cleared!`)
    circuitList.innerText = ``
})



//CIRCUIT IS ARCHIVED IN ITS OWN DIV BELOW CURRENT CIRCUIT
const archiveButton = document.querySelector(`#save-circuit`)
archiveButton.addEventListener(`click`, () => {
    console.log(`i am archived!`)
    const circuitHistory = document.querySelector(`#circuit-history`)
    const allWorkouts = document.querySelectorAll(`.current`)
    // LOOP THROUGH EACH ELEMENT IN NODE LIST AND APPEND TO CIRCUIT HISTORY
    const archiveDiv = document.createElement(`div`)
    archiveDiv.style.borderStyle = `outset`
    allWorkouts.forEach(workout => {
        const oneCircuit = document.createElement(`ul`)
        console.log(workout)
        archiveDiv.appendChild(oneCircuit)
        oneCircuit.appendChild(workout.cloneNode(true));
        circuitHistory.append(archiveDiv)
        circuitList.innerText = `` 
    })
})






