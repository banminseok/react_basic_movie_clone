import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  const onChange = (event)=>{
    setKeyword(event.target.value);
  };
  useEffect(()=>{
    console.log("CALL THE API....");
  },[]);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"}/>
      <div>
        <input
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="Search here..."
        />
        <h2>{counter}</h2>
        <button onClick={onClick}>click me</button>
      </div>
    </div>
  );
}

export default App;
