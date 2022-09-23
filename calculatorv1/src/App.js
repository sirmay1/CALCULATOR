import { useState } from 'react';

const App = () => {
    const [count, setCount] = useState("");
   
    const backspace = () => {
        try {
            setCount(count.slice(0, -1))
        } catch (err) {
            setCount(" ")
        }
    }
    const equals = () => {
      try {
        setCount(eval(count));
      } catch (error) {
        setCount("ERROR...");
      } 
    }
    return (
        <div className='grid'>
           <section className='container'>
            <center id="position">
                <input type="text" className='text_window' onChange={(e) => setCount(count + e.target.value)} value={count}/><br />
                <button className='btn-func' value="AC" onClick={() => backspace()}>AC</button>
                <button className='btn-func' value="%" onClick={(e) => setCount(count + e.target.value)}>%</button>
                <button className='btn-func' value="/"onClick={(e) => setCount(count + e.target.value)}>/</button>
                <button className='btn-func' value="=" onClick={()=> equals()}>=</button><br />
                <button className='btn-func' value="7" onClick={(e) => setCount(count + e.target.value)}>7</button>
                <button className='btn-func' value="8" onClick={(e) => setCount(count + e.target.value)}>8</button>
                <button className='btn-func' value="9" onClick={(e) => setCount(count + e.target.value)}>9</button>
                <button className='btn-func' value="*" onClick={(e) => setCount(count + e.target.value)}>*</button><br />
                <button className='btn-func' value="4" onClick={(e) => setCount(count + e.target.value)}>4</button>
                <button className='btn-func' value="5" onClick={(e) => setCount(count + e.target.value)}>5</button>
                <button className='btn-func' value="6" onClick={(e) => setCount(count + e.target.value)}>6</button>
                <button className='btn-func' value="-" onClick={(e) => setCount(count + e.target.value)}>-</button><br />
                <button className='btn-func' value="1" onClick={(e) => setCount(count + e.target.value)}>1</button>
                <button className='btn-func' value="2" onClick={(e) => setCount(count + e.target.value)}>2</button>
                <button className='btn-func' value="3" onClick={(e) => setCount(count + e.target.value)}>3</button>
                <button className='btn-func' value="+" onClick={(e) => setCount(count + e.target.value)}>+</button><br />
                <button className='btn-func' value="0" onClick={(e) => setCount(count + e.target.value)}>0</button>
                <button className='btn-func' value="." onClick={(e) => setCount(count + e.target.value)}>.</button>
                </center>
            </section> 
        </div>
    );
}
export default App;