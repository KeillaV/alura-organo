import './TextField.css'

const TextField = (props) => {

    const onInput = (event) => {
        props.onInput(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onInput} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField