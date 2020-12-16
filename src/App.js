import { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Show from './pages/Show'
import New from './pages/New'
import Edit from './pages/Edit'
import Nav from './components/Nav'

import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            bounties: [],
            finishedLoading: false
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3001/bounties')
        const json = await response.json()
        this.setState({bounties: json.bounties, finishedLoading: true})
    }
    
    render() {
        if (!this.state.finishedLoading) {
            return <div>Loading...</div>
        }
        if (this.state.bounties.length === 0) {
            return <div>No bounties to show!</div>
        }
        return (
            <div className='App'>
                <Nav />
                <h1>App!</h1>
                <Route exact path='/'>
                    <Home bounties={this.state.bounties}/>
                </Route>
                <Route
                    path='/show/:id'
                    render={(routeProps) => {
                        const bounty = this.state.bounties.find((b) => {
                            return b._id === routeProps.match.params.id
                        })
                        return <Show bounty={bounty} />
                    }}
                />
                <Route path='/new'>
                    <New />
                </Route>
                <Route path='/edit/:id'>
                    <Edit />
                </Route>
            </div>
        )
    }
}

export default App