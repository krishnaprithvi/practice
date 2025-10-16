const Header = (prop) => {
  return (
    <h1>{prop.course}</h1>
  )
}

const Part = (prop) => {
  return (
    <p><b>Part {prop.index}:</b> {prop.part}, <b>Exercises:</b> {prop.exercises}</p>
  )
}

const Body = (prop) => {
  return (
    <>
    <Part index='1' part={prop.parts[0]} exercises={prop.exercises[0]}/>
    <Part index='2' part={prop.parts[1]} exercises={prop.exercises[1]}/>
    <Part index='3' part={prop.parts[2]} exercises={prop.exercises[2]}/>
    </>
  )
}

const Total = (prop) => {
  return (
    <p>Total number of exercises in the course is {prop.exercises[0] + prop.exercises[1] + prop.exercises[2]}</p>
  )
}

const Application = () => {
  const course = "Application Development"
  const parts=["Fundamentals", "Using props for pass data", "State of a component"]
  const exercises = [8, 5, 12]

  return (
    <div>
      <Header course={course} />
      <Body parts={parts} exercises={exercises}/>
      <Total exercises={exercises} />
    </div>
  )
}

export default Application
