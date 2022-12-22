import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='social'>
                <img src='/images/fb.png' alt='Facebook'></img>
                <img src='/images/tw.png' alt='Twitter'></img>
                <img src='/images/ig.png' alt='Instagram'></img>
            </div>
            <div className='logo'>
                <img src='/images/logo.png' alt='Logo do projeto'></img>
            </div>
            <div className='team'>
                <label>Desenvolvido por Keilla, acompanhando curso Alura.</label>
            </div>
        </footer>
    );
}

export default Footer