import './Team.css'
import Worker from '../Worker'

const Team = (props) => {
    return (
        (props.workers.length > 0) ? <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

            <div className='workers'>
                {props.workers.map(worker => <Worker key={worker.name} backgroundColor={props.primaryColor} name={worker.name} job={worker.job} image={worker.image}/>)}
            </div> 
        </section>
        : ''
    )
}

export default Team