import './App.css';
import { useRoutes } from 'react-router-dom';

import AboutPage from './pages/about/about.page';
import ContactPage from './pages/contact/contact.page';
import HomePage from './pages/home/home.page';
import ReviewsPage from './pages/reviews/reviews.page';
import ServicesPage from './pages/services/services.page';

const App = () => {
    const routes = [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/about',
            element: <AboutPage />
        },
        {
            path: '/contact',
            element: <ContactPage />
        },
        {
            path: '/review',
            element: <ReviewsPage />
        },
        {
            path: '/services',
            element: <ServicesPage />
        }];

    const routing = useRoutes(routes);

    return (
        <section className="App">
            {routing}
        </section>
    );
}

export default App;
