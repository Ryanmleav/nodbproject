const workouts = [{
  id: 0,
  day: '',
  muscle: '',
  rep: 0,
  set: 0
}];
let id = 1;

module.exports = {
  getWorkout(req, res) {
      
      res.status(200).send(workouts);
  },
  createWorkout(req, res) {
      const { day, muscle, rep, set } = req.body;
      workouts.push({
          id,
          day,
          muscle,
          rep,
          set
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
  const { day, muscle, rep, set } = req.body;

  let index = workouts.findIndex(workouts => workouts.id == id);

  let foundWorkout = workouts[index];

  foundWorkout = {
      id: foundWorkout.id,
      muscle: muscle|| foundWorkout.muscle,
      day: day || foundWorkout.day,
      rep: rep || foundWorkout.rep,
      set: set || foundWorkout.set

  }
  workouts.splice(index, 1, foundWorkout);

  res.status(200).send(workouts)
  }
}
