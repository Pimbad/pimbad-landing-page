import { Link } from 'react-router-dom';
import './about.page.css'


const AboutPage = () => {
    return(
        <section>
            <p>About Page</p>
            <br />
            <Link to='/'>Back</Link>
        </section>
    )
}

export default AboutPage;