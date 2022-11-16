import { Link } from 'react-router-dom';
import './home.page.css'


const HomePage = () => {
    return(
        <section>
            <p>Home Page</p>
            <br />
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/review'>Review</Link></li>
                <li><Link to='/services'>Services</Link></li>
            </ul>
        </section>
    )
}

export default HomePage;