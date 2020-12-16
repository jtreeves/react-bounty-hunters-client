function FormField(props) {
    return (
        <form>
            <label htmlFor={props.labelLink}>{props.displayLabel}: </label>
            <input name={props.labelLink} value={props.value} onChange={props.handler}/>
        </form>
    )
}

export default FormField