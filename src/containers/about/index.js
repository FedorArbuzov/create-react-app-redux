import React from 'react';
import { decrement, decrementAsync, increment } from '../../modules/counter';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';


const About = (props) => (
  <div>
    <p>Count: {props.count}</p>
    <h1>About Page</h1>
    <p>Did you get here via Redux?</p>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count
});

export default connect(mapStateToProps)(About);
