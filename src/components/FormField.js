function FormField(props) {
    return (
        <form>
            <label htmlFor='name'>Name: </label>
            <input name='name' value={this.state.name} onChange={(e) => {
                this.setState({name: e.target.value})
            }}/>
        </form>
    )
}

export default FormField