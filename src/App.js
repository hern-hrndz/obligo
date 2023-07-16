import './App.css';
import './index.css';

import { Header } from './components/Header'
import { Home } from './components/Home';
import { Footer } from './components/Footer';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
