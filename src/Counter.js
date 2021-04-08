import React, { Component, useReducer } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // state는 무조건 객체형
    this.state = {
      counter: 0,
      fixed: 1
    };
  }

  // 이렇게 해주면 bind(this) 할 필요 없음
  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    console.log('increase');
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    });
    console.log('decrease');
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       throw new Error('Unhandled action');
//   }
// }

// function Counter() {
//   const [number, dispatch] = useReducer(reducer, 0);

//   const onIncrease = () => {
//     dispatch({
//       type: 'INCREMENT'
//     });
//   };

//   const onDecrease = () => {
//     dispatch({
//       type: 'DECREMENT'
//     });
//   };

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

export default Counter;
