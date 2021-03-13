import React from 'react'

const Edit = (props) => {
    return(
        props.editing ? (
            <button onClick={() => props.updateWorkout(props.workout.id)}>Save</button>
        ) : (
            <button onClick={() => props.edit()}>Edit Workout</button>
        )

    )
}
export default Edit