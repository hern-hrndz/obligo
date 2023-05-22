import './App.css';
import './index.css';

import { Header } from './components/Header'
import { Intro } from './components/Intro';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Intro />
      </BrowserRouter>
    </>
  );
}

export default App;
