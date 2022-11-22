import './about.page.css'
import { Link } from 'react-router-dom';


const AboutPage = () => {
    return(
        <section className='about-page'>
            <div className='about-first-block'>
                <div className='about-first-block-item'>
                    <h2>
                        Nós construímos <span className='about-first-block-highlight'>pontes </span>
                        entre <span className='about-first-block-highlight'>petshops e seus clientes</span>
                    </h2>
                </div>

                <div className='about-first-block-item'>
                    <p>
                        &nbsp;&nbsp;Uma plataforma para entregar conforto e praticidade aos donos de pet
                        e gestão eficiente para os petshops e estabelecimentos especializados
                        em saúde e estética animal.
                    </p>
                </div>
            </div>

            <div className='about-second-block'>
                <img src='images/pimbd-about-background.png' alt='illustrative-background'/>
            </div>

            <div className='about-third-block'>
                <div className='about-third-block-content'>
                    <div className='about-third-block-text'>
                        <div className='about-third-block-text-item'>
                            <h2>Juntos nós somos mais fortes</h2>
                        </div>

                        <div className='about-third-block-text-item'>
                            <h6>
                                Com um time experiente de veterinários e cuidadores de pet
                                trabalhamos para trazer a melhor experiência de petcare.
                            </h6>
                            <br/>
                            <br/>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Metus dictum at tempor commodo ullamcorper.
                                Consequat mauris nunc congue nisi vitae suscipit tellus mauris.
                                Ut tortor pretium viverra suspendisse potenti.
                                Arcu dictum varius duis at consectetur lorem donec massa.
                                Mus mauris vitae ultricies leo. Aliquam sem et tortor consequat id porta nibh venenatis.
                                Quam quisque id diam vel. Duis convallis convallis tellus id interdum.
                                Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                            </p>
                            <h3>
                                "Risus pretium quam vulputate dignissim suspendisse in est ante.
                                Cras pulvinar mattis nunc sed blandit libero volutpat sed.
                                Tincidunt eget nullam non nisi est sit amet facilisis."
                            </h3>
                        </div>
                    </div>

                    <div className='about-third-block-numbers'>
                        <div className='about-third-block-numbers-item'>
                            <p>Nunc pulvinar sapien et ligula. Tempor nec feugiat nisl pretium fusce id. Nullam non nisi est sit amet.</p>
                            <h2>290+</h2>
                        </div>
                        <div className='about-third-block-numbers-item'>
                            <p>Nunc pulvinar sapien et ligula. Tempor nec feugiat nisl pretium fusce id. Nullam non nisi est sit amet.</p>
                            <h2>12+</h2>
                        </div>
                        <div className='about-third-block-numbers-item'>
                            <p>Nunc pulvinar sapien et ligula. Tempor nec feugiat nisl pretium fusce id. Nullam non nisi est sit amet.</p>
                            <h2>20K+</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about-fourth-block'>
                <div className='about-fourth-block-content'>
                    <h3>Tem alguma dúvida ou podemos te ajudar em algo?</h3>
                    <h3>
                        <strong>Entre em contato!</strong>
                    </h3>

                    <Link to='/contato'>Contato</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;