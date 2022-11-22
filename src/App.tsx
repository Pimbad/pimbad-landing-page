import './App.css';
import { useRoutes } from 'react-router-dom';

import AboutPage from './pages/about/about.page';
import ContactPage from './pages/contact/contact.page';
import HomePage from './pages/home/home.page';
import ReviewsPage from './pages/reviews/reviews.page';

const App = () => {
    const routes = [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/inicio',
            element: <HomePage />
        },
        {
            path: '/sobre-nos',
            element: <AboutPage />
        },
        {
            path: '/contato',
            element: <ContactPage />
        },
        {
            path: '/avaliacoes',
            element: <ReviewsPage />
        }];

    const routing = useRoutes(routes);

    return (
        <section className="App">
            {routing}
        </section>
    );
}

export default App;
