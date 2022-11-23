import { Link } from 'react-router-dom';

import './home.page.css'


const HomePage = () => {
    return(
        <section>
            <div className='home-first-block'>
                <div className='home-first-block-content'>
                    <div className='home-first-block-content-item'>
                        <h2>A Nutrição tem o poder de transformar a vida do seu pet!</h2>
                        <p>
                            Nunc aliquet bibendum enim facilisis gravida neque convallis a cras.
                            Facilisis magna etiam tempor orci eu lobortis elementum.
                            Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna.
                        </p>
                        
                        <div className='home-first-block-content-item-links'>
                            <Link to='/'>Começar Agora</Link>
                            <Link to='/' className='home-first-block-simple-button'>Saber mais</Link>
                        </div>
                        
                        <br/>

                        <h6><strong>O aplicativo PetCare #1</strong> - com mais de 1 milhão de membros!</h6>

                    </div>
                    <div className='home-first-block-content-item'>
                        <img src='images/home-background2.png' alt='home background'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;