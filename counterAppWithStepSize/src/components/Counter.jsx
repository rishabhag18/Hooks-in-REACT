import { useState } from "react";
import styles from "./Counter.module.css";
const Counter = () => {
    const [count,setCount]=useState(0);
    const [step,setStep]=useState(1);
    const handleIncreament=()=>{
        setCount(count+step);
    };
    const handleDecreament=()=>{
        setCount(count>=step?count-step:0)
    }
    const handleReset=()=>{
        setCount(0);
    }
  return (
    <div className={styles.container}>
      <div>
        <section>
          <h1 className={styles.heading}>Welcome To Step Size Counter App</h1>
          <h2 className={styles.description}>
            You Can Define The Step Size Over Here
          </h2>
        </section>
        <section>
          <span className={styles.inputLabel}>
            Step Size: <input type="number" className={styles.StepSize} onChange={(e)=>setStep(parseInt(e.target.value))} />
            <span className={styles.count}>Count: {count}</span>
          </span>
        </section>
        <section>
          <button className={styles.Button} onClick={handleIncreament}>Increament</button>
          <button className={styles.Button} onClick={handleDecreament}>Decreament</button>
          <button className={styles.Button} onClick={handleReset}>Reset</button>
        </section>
      </div>
    </div>
  );
};
export default Counter;
