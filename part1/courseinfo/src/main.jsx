import ReactDOM from 'react-dom/client'

import Application from './App'

let counter = 1

const root = ReactDOM.createRoot(document.getElementById('root'))

// ReactDOM.createRoot(document.getElementById('root')).render(<Application counter={counter}/>)

const refresh = () => {
    root.render(<Application counter={counter}/>)
}
setInterval(() => {
    refresh()
    counter += 1
}, 2000)