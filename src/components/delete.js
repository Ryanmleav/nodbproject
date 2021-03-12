import React, {Components} from 'react'

function Delete(props){
    return(
<button onClick={() => props.deleteWorkout(props.workout.id)}>Delete</button>
    )
}
export default Delete;
