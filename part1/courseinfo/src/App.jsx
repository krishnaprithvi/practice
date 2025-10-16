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

const Application = () => {
  // const course = "Application Development"
  // const parts = [
  //     {
  //       name: "Fundamentals",
  //       exercises: 8
  //     },
  //     {
  //       name: "Using props for pass data",
  //       exercises: 5
  //     },
  //     {
  //       name: "State of a component",
  //       exercises: 12
  //     }
  // ]

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

  return (
    <div>
      <Header course={course.name} />
      <Body parts={course.parts}/>
      <Total exercises={course.parts} />
    </div>
  )
}

export default Application
