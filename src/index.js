import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoProvider } from './contexts/todo-context';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <App />
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
