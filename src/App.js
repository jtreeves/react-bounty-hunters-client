import { Component } from 'react'

import Home from './pages/Home'
import Show from './pages/Show'
import New from './pages/New'
import Edit from './pages/Edit'

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>App!</h1>
                <Home />
                <Show />
                <New />
                <Edit />
            </div>
        )
    }
}

export default App