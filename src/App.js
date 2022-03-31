import React from "react";
import "./style.css"

export default function App() {
    const [count, setCount] = React.useState(0)
    function handlePlus() {
        setCount(prevCount => prevCount + 1)
    }
    function handleMinus() {
        setCount(prevCount => prevCount -1)
    }
    return (
        <div className="counter">
            <button className="counter-minus" onClick={handleMinus}>-</button>
            <div className="counter-count">
                <h1>{count}</h1>
            </div>
            <button className="counter-plus" onClick={handlePlus}>+</button>
        </div>
    )
}