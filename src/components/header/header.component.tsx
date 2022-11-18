import { Link } from 'react-router-dom';
import './header.component.css';

const openResponsiveMenu = () => {
    const menuBackground = document.querySelector('#responsive-menu-background') as HTMLElement;
    menuBackground.style.display = 'block';

    const menu = document.querySelector('#responsive-menu-content') as HTMLElement;
    menu.style.marginLeft = "0vw";
}


const closeResponsiveMenu = () => {
    const menuBackground = document.querySelector('#responsive-menu-background') as HTMLElement;
    menuBackground.style.display = 'none';

    const menu = document.querySelector('#responsive-menu-content') as HTMLElement;
    menu.style.marginLeft = "-100vw";
}

const Header = () => {
    return (
        <header>
            <div className='responsive-menu' id='responsive-menu-background' onClick={closeResponsiveMenu}></div>
            <div className='responsive-menu-content' id='responsive-menu-content'>
                <div className='responsive-menu-close'>
                    <span onClick={closeResponsiveMenu}>X</span>
                </div>
                <div className='responsive-menu-itens'>
                    <div className='responsive-menu-item' onClick={closeResponsiveMenu}>
                        <Link to='/'>
                            Início
                        </Link>
                    </div>

                    <div className='responsive-menu-item' onClick={closeResponsiveMenu}>
                        <Link to='/sobre-nos'>
                            Sobre Nós
                        </Link>
                    </div>

                    <div className='responsive-menu-item' onClick={closeResponsiveMenu}>
                        <Link to='servicos'>
                            Serviços
                        </Link>
                    </div>

                    <div className='responsive-menu-item' onClick={closeResponsiveMenu}>
                        <Link to='avaliacoes'>
                            Avaliações
                        </Link>
                    </div>

                    <div className='responsive-menu-item' onClick={closeResponsiveMenu}>
                        <Link to='contato'>
                            Contato
                        </Link>
                    </div>
                    <div className='responsive-menu-item'>
                    </div>
                </div>
            </div>

            <div className='responsive-header-content'>
                <div className='responsive-logo'>
                    <img src='images/logo.png' className='header-logo-img' alt="logo" />
                    <h3 className='header-logo-title'>Pimbd</h3>
                </div>
                <div className='responsive-header-spread-menu' onClick={openResponsiveMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

            <div className='default-header-content'>
                <Link to='/' className='header-logo'>
                    <img src='images/logo.png' alt="logo" />
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

            <div className='responsive-header-content'>
                <div className='responsive-logo'>

                </div>
                <div className='responsive-header-spread-menu'>

                </div>
            </div>
        </header>
    )
}

export default Header;