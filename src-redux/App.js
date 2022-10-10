import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement} from './Actions/counter';
import {signin} from './Actions/signin';

function App() {
  const counter=useSelector((state)=>state.counter)
  const display=useSelector((state)=>state.signin)
  const dispatch=useDispatch()

  const inc=()=>{
    dispatch(increment())
  }
  const dec=()=>{
    dispatch(decrement())
  }
  const sign=()=>{
      dispatch(signin())
    }

  return (
    <>
    <h1>Redux Counter App</h1>
    <h2>counter:{counter}</h2>
    <h2>Display:{display}</h2>
    <button onClick={inc}>Increment</button>
    <button onClick={dec}>Decrement</button>
    <button onClick={sign}>Signin</button>
    </>
  );
}

export default App;
