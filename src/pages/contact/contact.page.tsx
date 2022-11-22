import './contact.page.css'


const ContactPage = () => {
    return (
        <section>
            <div className='contact-first-block'>
                <div className='contact-first-block-content'>
                    <h2>Queremos ouvir você, nos dê um alô!</h2>
                    <br />
                    <form action='/contato' method='get'>
                        <div className='contact-first-block-form'>
                            <div className='contact-first-block-form-item'>
                                <label>Nome</label>
                                <br />
                                <input type='text' name='nome' placeholder='Digite seu nome...' />
                            </div>

                            <div className='contact-first-block-form-item'>
                                <label>Sobrenome</label>
                                <br />
                                <input type='text' name='sobrenome' placeholder='Digite seu sobrenome...' />
                            </div>
                        </div>
                        <div className='contact-first-block-form'>
                            <div className='contact-first-block-form-item'>
                                <label>Telefone</label>
                                <br />
                                <input type='tel' pattern='+[0-9]{2}()[0-9]{2} [0-9]{9}' name='telefone' placeholder='+00 (00) 000000000' />
                            </div>

                            <div className='contact-first-block-form-item'>
                                <label>Email</label>
                                <br />
                                <input type='email' name='email' placeholder='Digite seu email...' />
                            </div>
                        </div>
                        <div className='contact-first-block-form'>
                            <div className='contact-first-block-form-item'>
                                <label>Mensagem</label>
                                <br />
                                <textarea placeholder='Digite como podemos te ajudar!'></textarea>
                            </div>
                        </div>

                        <button type='button'>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactPage;