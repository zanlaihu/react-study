import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './store';
import { couterSliceActions } from './store/couter.slice';

function App() {
  const counterValue = useAppSelector((state)=>state.counter.value)
  const dispatch = useAppDispatch()


  return (
    <div><div>{counterValue}</div><div><button onClick={() => { dispatch(couterSliceActions.increment()) }}>change</button></div></div>
  );
}

export default App;
