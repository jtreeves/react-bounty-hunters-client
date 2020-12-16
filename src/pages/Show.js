import { Component } from 'react'

class Show extends Component {
    render() {
        // if (!this.props.bounty) {
        //     return <div>Loading...</div>
        // } else {
            return (
                <div>
                    <h2>{this.props.bounty.name}</h2>
                    <p>Wanted for: {this.props.bounty.wantedFor}</p>
                    <p>Client: {this.props.bounty.client}</p>
                    <p>Last seen: {this.props.bounty.lastSeen}</p>
                    <p>Reward: {this.props.bounty.reward}</p>
                    <p>Hunters:</p>
                    <ul>
                        {
                            this.props.bounty.hunters.forEach((h) => {
                                <li>Name: {h.name}, Notoriety: {h.notoriety}</li>
                            })
                        }
                    </ul>
                </div>
            )
        // }
    }
}

export default Show