const express = require('express');
const nw = require('./controllers/workouts')
const port = 5200
const app = express()

app.use(express.json())


app.get('/api/workout-tracker', nw.getWorkout);

app.post('/api/workout-tracker', nw.createWorkout);

//query
app.delete('/api/workout-tracker', nw.deleteWorkout);


app.put('/api/workout-tracker/:id', nw.updateWorkout);


app.listen(port, () => console.log(`its still your set. is running on ${port}`));