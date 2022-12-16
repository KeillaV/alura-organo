import './Dropdown.css'

export const Dropdown = (props) => {
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}