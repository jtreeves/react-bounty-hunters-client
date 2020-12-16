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
    
    setName = (e) => {
        this.setState({name: e.target.value})
    }

    setWantedFor = (e) => {
        this.setState({wantedFor: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Create a new bounty</h1>
                <FormField
                    labelLink='name'
                    displayLabel='Name'
                    value={this.state.name}
                    handler={this.setName}
                />
                <FormField
                    labelLink='wantedFor'
                    displayLabel='Wanted For'
                    value={this.state.wantedFor}
                    handler={this.setWantedFor}
                />
            </div>
        )
    }
}

export default New