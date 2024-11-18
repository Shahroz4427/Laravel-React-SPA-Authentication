import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { initializeCsrf } from './lib/axios.js';
import Register from './pages/Register.jsx';

function App() {
    
   

    return (
        <>
          <Register></Register>
        </>
    );
}

export default App;
