import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
            <Header />
			<App />
            <Footer />
		</BrowserRouter>
	</React.StrictMode>
);
