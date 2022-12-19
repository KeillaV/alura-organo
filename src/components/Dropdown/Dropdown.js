import './Dropdown.css'

export const Dropdown = (props) => {

    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={event => props.onInput(event.target.value)} required={props.mandatory} value={props.value}>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}