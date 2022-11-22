import './home.page.css'


const HomePage = () => {
    return (
        <section>
            <div className='home-first-block'>
                <div className='home-first-block-item'>
                    <h2>
                        Nutrition has the power to transform pet's lives
                    </h2>
                    <p> 
                        Lorem ipsum dolor sit amet consectetur adipisicing els
                        praesentium alias dolorem distinctio deleniti repellat, labore incidunt libero?
                        Lorem ipsum dolor sit amet consectetur adipisicing els
                        praesentium alias dolorem distinctio deleniti repellat, labore incidunt libero?
                    </p>

                    <form>
                    <button type="submit" className='boton-home'> Get Started </button>
                    <button type='submit' className='botao-home-two' > Learn More </button>
                    </form>

                    <div className="home-first-text-app">
                        
                        <p className='home-app'> <b> The #1 Petcare app </b> - witch than 100,00 members </p>
                    </div>

                    <div className='home-first-block-sticker'>
                        <div className="home-first-app">

                   <a href=" # ">  <img src='images/home-ahttps://localhost:3000/
                   pple.png' className='img-apple' alt="Apple" /> </a>
                   <a href=" # "> <img src='images/home-play-store.png' className='img-play-store' alt="Play-store" /> </a>                  
                        </div>
                    </div>

                </div>

                <div className='home-first-block-item'>
                    <img src='images/home-background.png' className='img-principal' alt="Principal" />
                </div>
            </div>

            <div className='home-second-block'>
                <div className="home-second-block-item">   
                    <div className='flex-container'>
                <div className="flex-items">EMPRESA UM</div>
                <div className="flex-items">EMPRESA DOIS</div>
                <div className="flex-items">EMPRESA TRES</div>
                <div className="flex-items">EMPRESA QUATRO</div>
                    </div>
                </div>
            </div>

            <div className='home-three-block'>
                <div className="home-three-block-item">
                    <h2>
                    Our Services
                    </h2>
                    <h3>
                        Products and services loved by people and pets
                    </h3>
                    <p> 
                    Our personalized nutrition products are simple and enjoyable, to 
                    fit seamlessly into daily lives
                    </p>
                </div>
            </div>

            <div className='home-four-block'>
                <div className="home-four-block-item">   
                    <div className='flex-container-six'>
                  
                <div className="flex-items">
                      <button type="submit" className='flex-home-one'> #1 </button>
                </div>

                <div className="flex-items">
                      <button type="submit" className='flex-home-one'> #2 </button>
                </div>

                <div className="flex-items"> 
                      <button type="submit" className='flex-home-one'> #3 </button>
                </div>
                    </div>
                </div>
            </div> 

            <div className='home-four-block'>
                <div className="home-four-block-item">   
                    <div className='flex-container-six'>

                    <div className="flex-items">
                      <button type="submit" className='flex-home-one'> #4 </button>
                    </div>
                
                <div className="flex-items">
                    <button type="submit" className='flex-home-one'> #5 </button>
                </div>

                <div className="flex-items">
                    <button type="submit" className='flex-home-one'> #6 </button>
                </div>                

                    </div>
                </div>
            </div>
        </section>


    )
}

export default HomePage;