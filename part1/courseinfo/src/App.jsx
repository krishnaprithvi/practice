import { useState } from "react"

const Header = (prop) => {
  return (
    <h1>{prop.course}</h1>
  )
}

const Part = (prop) => {
  // console.log("parts", prop)
  return (
    <p><b>Part {prop.index}:</b> {prop.part.name}, <b>Exercises:</b> {prop.part.exercises}</p>
  )
}

const Body = (prop) => {
  return (
    <>
    <Part index='1' part={prop.parts[0]}/>
    <Part index='2' part={prop.parts[1]}/>
    <Part index='3' part={prop.parts[2]}/>
    </>
  )
}

const Total = (prop) => {
  return (
    <p>Total number of exercises in the course is {prop.exercises[0].exercises + prop.exercises[1].exercises + prop.exercises[2].exercises}</p>
  )
}

const Hello = ({name, age}) => {
  // const {name, age} = props
  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear()
  //   return yearNow - age
  // }

  const bornYear = () => new Date().getFullYear() - age

  return (
    <>
    <p>Hello {name}, you are {age} years old</p>
    <p>So you're probably born in {bornYear()}</p>
    </>
  )
}

const DisplayCount = ({count}) =>  <p>Count: {count}</p>

const ButtonComp = ({clickFunction, buttonText}) => <button onClick={clickFunction}>{buttonText}</button>

const Application = () => {

  // const [count, setCount] = useState(0)
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({left: 0, right: 0, count: 0})

  const name = "Julia"
  const age = "20"
  const course = {
    name: "Application Development",
    parts: [
      {
        name: "Fundamentals",
        exercises: 8
      },
      {
        name: "Using props for pass data",
        exercises: 5
      },
      {
        name: "State of a component",
        exercises: 12
      }
    ]
  }

  const incrementCount = () => setClicks({...clicks, count: clicks.count + 1})

  const decrementCount = () => {
    // const newClicks = {
    //   left: clicks.left,
    //   right: clicks.right,
    //   count: clicks.count - 1
    // }
    //Object Spread syntax
    const newClicks = {
      ...clicks,
      count: clicks.count - 1
    }
    if(clicks.count == 0) {
      appendText("error", "Counter cannot go under zero!")
    } else {
      setClicks(newClicks)
    }
  }

  const resetCount = () => { 
    if(clicks.count == 0) {
      appendText("error", "Counter is already zero!")
    } else {
      setClicks({
        ...clicks,
        count: 0
      })
    }
  }

  const leftCount = () => {
    setClicks({
      ...clicks,
      left: clicks.left + 1
    })
    console.log("Left", clicks.left)
  }
  const rightCount = () => {
    setClicks({
      ...clicks,
      right: clicks.right + 1,
      
    })
    console.log("Right", clicks.right)
  }

  const appendText = (id, text) => {
    document.getElementById(id).replaceChildren(text)
      setTimeout(() => {
        document.getElementById(id).replaceChildren("")
      }, 1500);
  }

  return (
    <div>
      <Header course={course.name} />
      <Body parts={course.parts}/>
      <Total exercises={course.parts} />
      <Hello name={name} age={age} />
      <Hello name="Robert" age='27' />
      <DisplayCount count={clicks.count}/>
      <ButtonComp clickFunction={incrementCount} buttonText={"Increment Count"} />
      <ButtonComp clickFunction={resetCount} buttonText={"Reset Count"} />
      <ButtonComp clickFunction={decrementCount} buttonText={"Decrement Counter"} />
      <ButtonComp clickFunction={leftCount} buttonText={"Set Left"} />
      <ButtonComp clickFunction={rightCount} buttonText={"Set Right"} />
      <p id="error" style={{color: "red"}}></p>
    </div>
  )
}

export default Application
