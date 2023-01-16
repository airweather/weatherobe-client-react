import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
