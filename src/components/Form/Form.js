import './Form.css'
import TextField from '../TextField'
import Dropdown from '../Dropdown'
import Button from '../Button'

export const Form = () => {

    const teams = [
        'Programação',
        'Front-end',
        'Devops',
        'Mobile',
        'UX e Design',
        'Data Science',
        'Inovação e Gestão'
    ]

    const save = (evento) => {
        evento.preventDefault()
        console.log("Card criado com sucesso!")
    }

    return (
        <section className='form'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField mandatory={true} label='Nome' placeholder='Digite seu nome'/>
                <TextField mandatory={true} label='Cargo' placeholder='Digite seu cargo'/>
                <TextField mandatory={true} label='Imagem' placeholder='Digite o endereço da imagem'/>
                <Dropdown label='Times' items={teams}/>
                <Button>Criar card</Button>
            </form>
        </section>
    )
}
