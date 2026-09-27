import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

// StrictMode is intentionally not used: the interaction layer attaches DOM listeners once.
createRoot(document.getElementById('root')).render(<App />);
