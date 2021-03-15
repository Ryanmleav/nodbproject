let workouts = [];
let id = 1;
let workoutImages = {
    chest: 'https://www.oldschoollabs.com/wp-content/uploads/2020/07/Upper-Chest-Muscles-Worked2.jpg',
    back: 'image',
    shoulders: 'ok',
    legs: 'this',
    arms: 'is cool',
}

module.exports = {
    getWorkout(req, res) {

        res.status(200).send(workouts);
    },
    createWorkout(req, res) {
        const { day, muscle, reps, sets } = req.body;
        let newImage = ''
        for (let key in workoutImages) {
            if (muscle === key) {
                newImage = workoutImages[key]
            }
        }
        console.log(newImage)

        workouts.push({
            id,
            day,
            muscle,
            image: newImage,
            reps,
            sets
        })
        id++;
        res.status(200).send(workouts)
    },
    deleteWorkout(req, res) {

        const { id } = req.params;
        const index = workouts.findIndex(workout => workout.id == id)

        workouts.splice(index, 1)
        res.status(200).send(workouts)
    },
    updateWorkout(req, res) {
        const { id } = req.params;
        const { day, muscle, reps, sets } = req.body;

        let index = workouts.findIndex(workouts => workouts.id == id);

        let foundWorkout = workouts[index];

        foundWorkout = {
            id: foundWorkout.id,
            muscle: muscle || foundWorkout.muscle,
            day: day || foundWorkout.day,
            reps: reps || foundWorkout.reps,
            sets: sets || foundWorkout.sets

        }
        workouts.splice(index, 1, foundWorkout);

        res.status(200).send(workouts)
    }
}
