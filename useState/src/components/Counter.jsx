import { useState } from "react";
import styles from "./Counter.module.css";
const Counter=()=>{
    const [count,setCount]=useState(0);
    return (
        <div className={styles.container}>
            <h1>{`Hello Everyone. This is made using useState() Hooks.`}</h1>
            <p className={styles.countVariable}>{count}</p>
            <button onClick={()=>setCount(count+1)} className={styles.increamentButton}>Increament</button>
        </div>
    )
}
export default Counter;