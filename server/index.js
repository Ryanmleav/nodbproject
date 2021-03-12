const express = require('express')
const nw = require('./controllers/workouts')
const port = 5200
const app = express()

app.use(express.json())


app.get('/api/workout', nw.getWorkout);

app.post('/api/workout', nw.createWorkout);

app.delete('/api/workout/:id', nw.deleteWorkout);

app.put('/api/workout/:id', nw.updateWorkout);


app.listen(port, () => console.log(`its still your set. is running on ${port}`));