import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx';

function renderApp() {
    const container = document.getElementById('root');
    if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    } else {
        console.error('Container element not found');
        console.log('Document body:', document.body.innerHTML);
    }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
} else {
    renderApp();
}

