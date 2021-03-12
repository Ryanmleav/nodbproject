import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'

class App extends Component{
  constructor(){
    super();
    this.state= {
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
    handleMuscle(val){
      this.setState({
        muscle:val
      });
    }
    handleDay(val){
      this.setState({
        day:val
      });
    }
    handleReps(val){
      this.setState({
        reps:val
      });
    }
    handleSets(val){
      this.setStaet({
        sets:val
        });
      }
      componentDidMount(){
        axios.get('/api/workout-tracker').then(res => {
          this.setState({
            workouts: res.data
          })
        })
        .catch(err => {console.log(err)})
    }
  createWorkout(day,muscle,reps,sets){
    axios.post('/api/workout-tracker', {day,muscle,reps,sets}).then(res =>{
      this.setState({
        workouts: res.data,
        day: '',
        muscle: '',
        reps:0,
        sets:0
      })
    })
    .catch(err => {console.log(err)})
  }
  deleteWorkout(id){
    axios.delete(`/api/workout-tracker/${id}`).then(res => {
      this.setState({
        workouts: res.data
      });
    })
    .catch(err => {console.log(err)})
  }
  edit(day, muscle, reps, sets){
    this.setState({
      day,
      muscle,
      reps,
      sets
    })
  }
  updateWorkout(id){
    let {day, muscle, reps, sets} = this.state

    axios.put(`/api/workout-tracker/${id}`, {day, muscle, reps, sets}).then(res => {
      this.setState({
        workouts: res.data,
        day: '',
        muscle: '',
        reps: 0,
        sets: 0,
      })
    })
    .catch(err => {console.log(err)})
  }
  }
