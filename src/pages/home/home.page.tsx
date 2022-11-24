import { Link } from 'react-router-dom';

import './home.page.css'


const HomePage = () => {
    return (
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

                        <br />

                        <h6><strong>O aplicativo PetCare #1</strong> - com mais de 1 milhão de membros!</h6>

                    </div>
                    <div className='home-first-block-content-item'>
                        <img src='images/home-background2.png' alt='home background' />
                    </div>
                </div>
            </div>

            <div className='home-second-block'>
                <div className='home-second-block-content'>
                    <div className='home-second-block-content-item'>
                        <img src='images/wallmart-partner.png' alt='wallmart partner' />
                    </div>
                    <div className='home-second-block-content-item'>
                        <img src='images/petco-partner.png' alt='petco partner' />
                    </div>
                    <div className='home-second-block-content-item'>
                        <img src='images/lin-partner.png' alt='linneaus partner' />
                    </div>
                    <div className='home-second-block-content-item'>
                        <img src='images/petcare-partner.png' alt='petcare partner' />
                    </div>
                </div>
            </div>

            <div className='home-third-block'>
                <div className='home-third-block-content'>
                    <div className='home-third-block-header'>
                        <h5>NOSSOS SERVIÇOS</h5>
                        <h2>Produtos e servicos amados pelas pessoas e pelos pets</h2>
                        <p>Nossos produtos e serviços especializados são simples práticos de serem inseridos na rotina do seu pet.</p>
                    </div>
                    <div className='home-third-block-itens'>
                        <div className='home-third-block-item'>
                            <div className='home-third-block-card'>
                                <div className='home-third-block-card-icon'>
                                    <i className="fa-solid fa-dog"></i>
                                </div>
                                <div className='home-third-block-card-text'>
                                    <h1>Medical Administration</h1>
                                    <p>Sit amet nulla facilisi morbi tempus iaculis urna. In cursus turpis massa tincidunt dui ut ornare.</p>
                                </div>
                            </div>
                        </div>
                        <div className='home-third-block-item'>
                            <div className='home-third-block-card'>
                                <div className='home-third-block-card-icon'>
                                    <i className="fa-solid fa-cat"></i>
                                </div>
                                <div className='home-third-block-card-text'>
                                    <h1>Pet Care</h1>
                                    <p>Sit amet nulla facilisi morbi tempus iaculis urna. In cursus turpis massa tincidunt dui ut ornare.</p>
                                </div>
                            </div>
                        </div>
                        <div className='home-third-block-item'>
                            <div className='home-third-block-card'>
                                <div className='home-third-block-card-icon'>
                                    <i className="fa-solid fa-notes-medical"></i>
                                </div>
                                <div className='home-third-block-card-text'>
                                    <h1>Overnight Care</h1>
                                    <p>Sit amet nulla facilisi morbi tempus iaculis urna. In cursus turpis massa tincidunt dui ut ornare.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='home-third-block-itens'>
                        <div className='home-third-block-item'>
                            <div className='home-third-block-card'>
                                <div className='home-third-block-card-icon'>
                                    <i className="fa-solid fa-stethoscope"></i>
                                </div>
                                <div className='home-third-block-card-text'>
                                    <h1>Grooming & Brushing</h1>
                                    <p>Sit amet nulla facilisi morbi tempus iaculis urna. In cursus turpis massa tincidunt dui ut ornare.</p>
                                </div>
                            </div>
                        </div>
                        <div className='home-third-block-item'>
                            <div className='home-third-block-card'>
                                <div className='home-third-block-card-icon'>
                                    <i className="fa-solid fa-user-nurse"></i>
                                </div>
                                <div className='home-third-block-card-text'>
                                    <h1>Pet Walk</h1>
                                    <p>Sit amet nulla facilisi morbi tempus iaculis urna. In cursus turpis massa tincidunt dui ut ornare.</p>
                                </div>
                            </div>
                        </div>
                        <div className='home-third-block-item'>
                            <div className='home-third-block-card'>
                                <div className='home-third-block-card-icon'>
                                    <i className="fa-solid fa-kit-medical"></i>
                                </div>
                                <div className='home-third-block-card-text'>
                                    <h1>Home Visit</h1>
                                    <p>Sit amet nulla facilisi morbi tempus iaculis urna. In cursus turpis massa tincidunt dui ut ornare.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home-fourth-block'>
                <div className='home-fourth-block-content'>
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

export default HomePage;