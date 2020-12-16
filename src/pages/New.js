import { Component } from 'react'

import FormField from '../components/FormField'

class New extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            wantedFor: ''
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Create a new bounty</h1>
                <FormField
                    labelLink='name'
                    displayLabel='Name'
                    value={this.state.name}
                    handler={this.handleInput}
                />
                <FormField
                    labelLink='wantedFor'
                    displayLabel='Wanted For'
                    value={this.state.wantedFor}
                    handler={this.handleInput}
                />
            </div>
        )
    }
}

export default New