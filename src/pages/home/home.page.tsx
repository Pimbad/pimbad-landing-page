import './home.page.css'


const HomePage = () => {
    return(
        <section>

        <div className="title">
            <h2 className="title">
                 Nutrition has the power to transform pet's lives 
            </h2>
        </div>

        <div className="SUB-TITLE">

                <p className="subTitle"> Lorem ipsum dolor sit amet consectetur adipisicing el
                s praesentium alias dolorem distinctio deleniti repellat, labore incidunt libero?
                </p>
        </div>
        
        <div className="holder">    
          <div className="imagem" data-title="">

          <img src='images/home-background.png' className='img-principal' alt="Principal" />
    
          </div>
        </div>

        <div className="btn">

         <form>

            <button type="submit" className='btn-principal'> Get Started </button>
        
        </form>
        </div>

        <div className="btn-2">

            <form>

            <button type='submit' className='btn-transp' > Learn More </button>

            </form>
        </div>
     
        </section>

        
    )
}

 export default HomePage;