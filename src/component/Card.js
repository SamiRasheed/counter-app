import React,{useState} from 'react'

export default function Card(props) {
    const [count,setCount]=useState(0);
    const increment =()=>{
        setCount(count + 1);
    }
    const reset =()=>{
        setCount(0);
    }
    const decrement =()=>{
        setCount(count - 1);
    }
  return (
    <>
    <div className="header">
        <h1>{props.heading}</h1>
    </div>
    <div className="card my-3">
    <div className="card-body">
    <div className="container">
        <p>{count}</p>
        <button className="btn btn-danger" onClick={decrement}>-</button>
        <button className="btn btn-danger" onClick={reset}>Reset</button>
        <button className="btn btn-danger" onClick={increment}>+</button>
    </div>
    </div>
    </div>
    </>
  )
}
