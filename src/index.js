// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './Componentes/App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// 1. Importa ReactDOM desde 'react-dom' (sin /client)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Componentes/App';
import './index.css';

// 2. Utiliza ReactDOM.render en lugar de createRoot
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);