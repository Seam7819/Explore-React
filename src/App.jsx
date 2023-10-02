
import './App.css'
import Counting from './counter'
import Counter from './counter'
import Friends from './friends'
import Users from './user'

function App() {

  const handleClick2 = () => {
    alert('button Clicked')
  }
  
  function handleClick() {
    alert('Button Clicked')
  }

  const addANumber = (num) => {
    alert(num + 5);
  }

  return (
    <>


<Users></Users>
    {/* <Counter></Counter> */}
    <Counting></Counting>
    <h2>React core concept part=2</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me</button>
      {/* jodi nicher code e arrow function na deya hoy tobe function auto call hoye jabe */}
      <button onClick={() => addANumber(5)}>Clicked me and add a  number</button>  
      <Friends></Friends>
    </>
  )
}

export default App
