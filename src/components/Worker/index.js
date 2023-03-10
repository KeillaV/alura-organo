import './Worker.css'

const Worker = ({name, job, image, backgroundColor}) => {
    return (
        <div className='worker'>
            <div className='header' style={{ backgroundColor: backgroundColor }}>
                <img src={image} alt={name}/>
            </div>
            <div className='baseboard'>
                <h4>{name}</h4>
                <h5>{job}</h5>
            </div>
        </div>
    )
}

export default Worker