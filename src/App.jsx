const Header = (prop) => {
  return (
    <h1>{prop.course}</h1>
  )
}

const Body = (prop) => {
  return (
    <>
    <p><b>Part 1:</b> {prop.parts[0]}, <b>Exercises:</b> {prop.exercises[0]}</p>
    <p><b>Part 1:</b> {prop.parts[1]}, <b>Exercises:</b> {prop.exercises[1]}</p>
    <p><b>Part 1:</b> {prop.parts[2]}, <b>Exercises:</b> {prop.exercises[2]}</p>
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
