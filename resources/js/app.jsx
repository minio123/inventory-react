import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

if (document.getElementById('app')) {
    ReactDOM.createRoot(document.getElementById('app')).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

