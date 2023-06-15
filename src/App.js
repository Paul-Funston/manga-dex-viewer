import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <div className='container'>
      <Home />

      </div>
      <Footer />
    </div>
  );
}

export default App;
