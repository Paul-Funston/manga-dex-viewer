import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Details from './pages/Details';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <div className='container my-5'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Details/:id" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
