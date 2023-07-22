fetch("http://localhost:3000/workouts")
.then(res => res.json())
.then(workOuts => getRandomWorkout(workOuts))
const getRandomWorkout = (workOuts) => { 
    if (!Array.isArray(workOuts) || workOuts.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * workOuts.length);
    return workOuts[randomIndex];
}
