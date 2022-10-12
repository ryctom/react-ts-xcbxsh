import * as React from 'react';
import './style.css';

import { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);
    const [doubleCount, setDoubleCount] = useState(count * 2);
    const handleCount = () => {
        setCount(count + 1);
        setDoubleCount(count * 2);
    };
    return (
        <div className="App">
            <div>
                <h2>Count Without useEffect</h2>
                <h3>Count: {count}</h3>
                <h3>Double Count: {doubleCount}</h3>
                <button onClick={handleCount}>Count++</button>
            </div>
        </div>
    );
}
