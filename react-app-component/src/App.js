import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initNumber: this.props.initNumber,
      date: new Date().toString() //현재날짜출력
    }
    console.log('Class Comp => constructor');
  }
  componentDidMount() {
    console.log('Class Comp => componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Class Comp => shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('Class Comp => componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Class Comp => componentWillUnmount');
  }

  render() {
    console.log('Class Comp => render');

    return (
      <div className="container">
        <h2>Class Style Component</h2>

        <p>Number1 : {this.state.initNumber}</p>
        <button onClick={() => {
          this.setState({ initNumber: Math.random() });
        }}>random</button>

        <p>Date1 : {this.state.date}</p>
        <button onClick={() => {
          this.setState({ date: new Date().toString() });
        }}>date</button>
      </div>
    )
  }
}
function FunctionComp(props) {

  class ClassCounter extends Component {
    state = { count: 0 }
    componentDidUpdate() {
      setTimeout(() => {
        console.log(`${this.state.count}`);
      }, 1000);
      return true;
    }
    render() {
      return (
        <>
          <button onClick={() => {
            this.state.count++;
            this.setState({ state: this.state.count });
          }}>click</button>
        </>
      )
    }
  }
  const num = useState(props.initNumber);
  const setNum = num[1];
  const [date, setDate] = useState(new Date().toString());

  useEffect(() => {
    console.log('FunctionComp => useEffect1');
  });
  useEffect(() => {
    console.log('FunctionComp => useEffect mount');
  }, []);
  console.log('FunctionComp => render');

  return (
    <div className="container">
      <h2>Function Style Component</h2>

      <p>Number2 : {num[0]}</p>
      <button onClick={() => {
        setNum(Math.random());
      }}>random</button>

      <p>Date2: {date}</p>
      <button onClick={() => { setDate(new Date().toString()) }}>
        date
      </button>
    </div>
  )
}
class ClassCounter extends Component {
  state = { count: 0 }
  componentDidUpdate() {
    setTimeout(() => {
      console.log(`${this.state.count}`);
    }, 1000);
    return true;
  }
  render() {
    return (
      <>
        <button onClick={() => {
          this.state.count++;
          this.setState({ state: this.state.count });
        }}>click</button>
      </>
    )
  }
}
function FunctionCounter() {
  const [count, setCount] = useState(0);
  useEffect(function () {
    setTimeout(() => {
      console.log(`${count}`);
    }, 1000);
  });
  return (
    <>
      <button onClick={() => {
        setCount(count + 1);
      }}>click</button>
    </>
  )
}

function App() {
  const [isShow, setShow] = useState(true);
  return (
    <div className="App">
      <h1>Hello World</h1>
      {
        isShow ? <ClassComp initNumber={2}></ClassComp> : null
      }
      {/* <ClassComp initNumber={2}></ClassComp> */}
      <ClassCounter></ClassCounter>
      <FunctionComp initNumber={2}></FunctionComp>
      <FunctionCounter></FunctionCounter>

    </div>
  );
}
export default App;

