import { Link } from 'react-router-dom';
import './footer.component.css'

const Footer = () => {
    return(
        <footer>
            <div className='footer-itens'>
                <div className='footer-item footer-first-item'>
                    <Link to='/'>
                        <img src='images/logo.png' alt="logo" />
                        <h3>Pimbd</h3>
                    </Link>
                    <p>
                        Pimbd é o serviço multi plataforma para contratar serviços de saúde
                        que garantem a segurança para o seu pet!
                    </p>
                    <div className='footer-icons'>
                        <a href='https://www.instagram.com'>
                            <i className='fa-brands fa-instagram footer-first-icon'></i>
                        </a>
                        <a href='https://facebook.com'>
                            <i className='fa-brands fa-facebook'></i>
                        </a>
                        <a href='https://tiktok.com'>
                            <i className='fa-brands fa-tiktok'></i>
                        </a>
                    </div>
                </div>
                <div className='footer-item'>
                    <h4>Acesso rápido</h4>
                    <ul>
                        <li><Link to='/'>Início</Link></li>
                        <li><Link to='/servicos'>Serviços</Link></li>
                        <li><Link to='/avaliacoes'>Avaliações</Link></li>
                        <li><Link to='/'>Redes Sociais</Link></li>
                        <li><Link to='/'>Seja um parceiro</Link></li>
                    </ul>
                </div>
                <div className='footer-item'>
                    <h4>Precisa de ajuda?</h4>
                    <ul>
                        <li><Link to='/sobre-nos'>Sobre nós</Link></li>
                        <li><Link to='/contato'>Contato</Link></li>
                        <li><Link to='/'>FAQ</Link></li>
                        <li><Link to='/'>Newsletter</Link></li>
                        <li><Link to='/'>Parceiros</Link></li>
                    </ul>
                </div>
                <div className='footer-item'>
                    <h4>Newsletter</h4>
                    <p>Inscreva - se na nossa newsletter!</p>
                    <input type="text" name='newsletter_email' placeholder='Digite seu email!'/>
                    <br />
                    <button>Increver - se</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;