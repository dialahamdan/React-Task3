import {useState}  from 'react'

function About() {

  let [count,setCount] = useState(0);
  const changeCount = ()=>{
   setCount(count + 1) ;
  };
  return (
    <>
      <button onClick={changeCount}>count : {count}</button>
    </>
  )
}

export default About
