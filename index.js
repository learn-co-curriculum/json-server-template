

// EVENT LISTENER HOOKS UP ROLL DIE UP WITH GENERATOR
document.querySelector(`#roll-die`).addEventListener(`click`, () => {
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
    newP.innerText = generatedWorkOut.workout
    newP.setAttribute(`class`, `current`)
    circuitList.appendChild(newP)
}
})

const archiveButton = document.querySelector(`#save-circuit`)
archiveButton.addEventListener(`click`, () => {
    console.log(`i am archived!`)
})


// CLEARS CURRENT CIRCUIT
const clearButton = document.querySelector(`#clear-circuit`)
clearButton.addEventListener(`click`, () => {
    console.log(`i am cleared!`)
    const circuitList = document.querySelector(`#current-circuit`)
    circuitList.innerText = ``
})


