import './Team.css'
import Worker from '../Worker'

const Team = (props) => {
    return (

        <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

            <div className='workers'>
                {props.workers.map(worker => <Worker name={worker.name} job={worker.job} image={worker.image}/>)}
            </div> 
        </section>
    )
}

export default Team