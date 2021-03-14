import React, { Component } from 'react';
import Delete from './Delete'
import Edit from './Edit'

class Daily extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false
    }
  }
  edit = () => {
    const { workout } = this.props;
    this.setState({
      editing: true
    })
    this.props.setEdit(workout.day, workout.muscle, workout.reps, workout.sets)
  }
  updateWorkout = (id) => {
    this.setState({
      editing: false
    })
    this.props.updateWorkout(id);
  }
  render() {
    const { workout, deleteWorkout, setEdit } = this.props;
    return (
      <div className="tile">
        <div className="daily reports">
          <h2>{workout.day}</h2>
          <p>Workout: {workout.muscle}</p>
          <p>Rep: {workout.reps}</p>
          <p>Set: {workout.sets}</p>
          <Delete
            key={workout.id}
            workout={workout}
            deleteWorkout={deleteWorkout}
          />
          <Edit
            key={workout.id}
            workout={workout}
            editing={this.state.editing}
            edit={this.edit}
            updateWorkout={this.updateWorkout}
          />
          {/* {this.state.editing ? (
                    <button onClick={() => this.updateWorkout(workout.id)}>Save</button>
                ) : (
                    <button onClick={() => this.edit()}>Edit Workout</button>
                )} */}
        </div>
      </div>
    )
  }
}
export default Daily;