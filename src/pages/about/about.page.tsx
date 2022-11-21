import './about.page.css'


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
        </section>
    )
}

export default AboutPage;