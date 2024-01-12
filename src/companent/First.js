import React from 'react'
import {connect} from 'react-redux'
 function First({  counter,   increment , decrement}) {
  return (
    <div>
       <button type='button' onClick={decrement}>-</button>

      <p>{counter}</p>
      <button type='button' onClick={increment}>+</button>
     
    </div>
  )
}

function mapStateToProps(state){
    return {
        counter:state.counter
    }
}
function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({ type: 'DECREMENT' })
    }
   
}

export default connect(mapStateToProps, mapDispatchToProps)(First)
