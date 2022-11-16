import { Link } from 'react-router-dom';
import './header.component.css';

import Logo from './images/logo.png';

const Header = () => {
    return (
        <header>
            <div className='header-content'>
                <Link to='/' className='header-logo'>
                    <img src={Logo} className='header-logo-img' />
                    <h3 className='header-logo-title'>Pimbd</h3>
                </Link>
                <div className='header-itens'>
                    <div className='header-item'>
                        <Link to='/'>Início</Link>
                    </div>
                    <div className='header-item'>
                        <Link to='/sobre-nos'>Sobre Nós</Link>
                    </div>
                    <div className='header-item'>
                        <Link to='/servicos'>Serviços</Link>
                    </div>
                    <div className='header-item'>
                        <Link to='/avaliacoes'>Avaliações</Link>
                    </div>
                    <div className='header-item header-last-item'>
                        <Link to='/contato' className='header-highlight-item'>Contato</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;