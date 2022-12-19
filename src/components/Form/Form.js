import './Form.css'
import TextField from '../TextField'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { useState } from 'react'

export const Form = (props) => {

    const teams = [
        'Programação',
        'Front-end',
        'Devops',
        'Mobile',
        'UX e Design',
        'Data Science',
        'Inovação e Gestão'
    ]

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const save = (evento) => {
        evento.preventDefault()
        console.log("Card criado com sucesso!")
        props.whenInputWorker({
            name,
            job,
            image,
            team
        })
    }

    return (
        <section className='form'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    mandatory={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    value={name}
                    onInput={value => setName(value)}
                />
                <TextField 
                    mandatory={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    value={job}
                    onInput={value => setJob(value)}
                />
                <TextField 
                    mandatory={true} 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem'
                    value={image}
                    onInput={value => setImage(value)}
                />
                <Dropdown 
                    mandatory={true}
                    label='Times' 
                    items={teams}
                    value={team}
                    onInput={value => setTeam(value)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}
