import React from 'react';
import {QuestionStore} from './stores/question-store.js';

var mountNode = document.getElementById("app");
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {count: props.initialCount};

  }

  tick(){
    this.setState({count: this.state.count + 1});
  }

  render(){
    return (
      <div>Counter clicks {this.state.count} <button onClick={this.tick}>Click here</button></div>
    );
  }
}

Counter.propTypes = {initialCount: React.PropTypes.number};
Counter.defaultProps = {initialCount: 0};

class ProductList extends React.Component{
  render(){
    return <p>Hello World ES6 <Counter /></p>;
  }
}

React.render(<ProductList></ProductList>, mountNode);
