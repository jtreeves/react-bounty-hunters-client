import { Component } from 'react'

class New extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }
    
    render() {
        return (
            <div>
                <h1>Create a new bounty</h1>
                <div>
                    <form>
                        <label htmlFor='name'>Name: </label>
                        <input name='name' value={this.state.name} onChange={(e) => {
                            this.setState({name: e.target.value})
                        }}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default New