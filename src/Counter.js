// pure function Component
import React from 'react';
import { connect } from 'react-redux';

function Counter(props){

  return(
    <div>
      <h1>I'm a counter</h1>
      <p>Count: {props.count}</p>
      <button>increment</button>
    </div>
  )
}

function mapStateToProps(state){
  console.log('mapStateToProps', state);
  count: state.count
}

export default connect(mapStateToProps)(Counter) ;
