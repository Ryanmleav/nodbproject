import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Daily from './components/Daily'

class App extends Component {
  constructor() {
    super();
    this.state = {
      workouts: [],
      day: '',
      muscle: '',
      reps: 0,
      sets: 0
    };
    this.deleteWorkout = this.deleteWorkout.bind(this);
    this.updateWorkout = this.updateWorkout.bind(this);
    this.edit = this.edit.bind(this);
  }
  handleDay(val) {
    this.setState({
      day: val
    });
  }
  handleMuscle(val) {
    this.setState({
      muscle: val
    });
  }

  handleReps(val) {
    this.setState({
      reps: val
    });
  }
  handleSets(val) {
    this.setState({
      sets: val
    });
  }
  componentDidMount() {
    axios.get('/api/workout-tracker').then(res => {
      console.log(res.data)
      this.setState({
        workouts: res.data
      })
    })
      .catch(err => { console.log(err) })
  }
  createWorkout(day, muscle, reps, sets) {
    console.log(day, muscle, reps, sets)
    axios.post('/api/workout-tracker', { day, muscle, reps, sets }).then(res => {
      console.log(res.data)
      this.setState({
        workouts: res.data,
      })
    })
      .catch(err => { console.log(err) })
  }
  deleteWorkout(id) {
    axios.delete(`/api/workout-tracker?id=${id}`).then(res => {
      this.setState({
        workouts: res.data
      });
    })
      .catch(err => { console.log(err) })
  }
  edit(day, muscle, reps, sets) {
    this.setState({
      day,
      muscle,
      reps,
      sets
    })
  }
  updateWorkout(id) {
    let { day, muscle, reps, sets } = this.state

    axios.put(`/api/workout-tracker/${id}`, { day, muscle, reps, sets }).then(res => {
      this.setState({
        workouts: res.data,
        day: '',
        muscle: '',
        reps: 0,
        sets: 0,
      })
    })
      .catch(err => { console.log(err) })
  }
  render() {
    const { day, muscle, reps, sets } = this.state;
    console.log(this.state)
    const mappedWorkouts = this.state.workouts.map(workout => {
      return (

        <Daily
          key={workout.id}
          workout={workout}
          deleteWorkout={this.deleteWorkout}
          updateWorkout={this.updateWorkout}
          edit={this.edit}
        />
      );
    });
    console.log(this.state.workouts, 'workout array')
    return (
      <div className="App">
        <Header
          key={day.id}
          muscle={muscle}
          day={this.handleDay} />
        <input type="text" placeholder="Day"
          onChange={e => this.handleDay(e.target.value)}
          value={this.state.day}
        ></input>
        {/* <input type="text" placeholder="Muscle trained"
          onChange={e => this.handleMuscle(e.target.value)}
          value={this.state.muscle}
        ></input> */}
        <select onChange={e => this.handleMuscle(e.target.value)}>
          <option placeholder='muscle trained'>Muscle Trained</option>
          <option value='chest'>Chest</option>
          <option value='back'>Back</option>
          <option value='legs'>Legs</option>
          <option value='shoulders'>Shoulders</option>
          <option value='arms'>Arms</option>
        </select>
        <input type="text" placeholder="Reps"
          onChange={e => this.handleReps(e.target.value)}
          value={this.state.rep}
        ></input>
        <input type="text" placeholder="Sets"
          onChange={e => this.handleSets(e.target.value)}
          value={this.state.set}
        ></input>
        <button onClick={() => this.createWorkout(day, muscle, reps, sets)}>Create Workout</button>
        <div className='mappedworkouts'>{mappedWorkouts}</div>
      </div>
    );
  }
}
export default App;