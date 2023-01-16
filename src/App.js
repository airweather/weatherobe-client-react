import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Search from './component/Search';
import DailyLook from './component/DailyLook';
import Login from './component/Login';
import Main from './component/Main';
import Wardrobe from './component/Wardrobe';
import Write from './component/Write';
import Mypage from './component/Mypage';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route path="/DailyLook" element={<DailyLook/>}/>
          <Route path="/wardrobe" element={<Wardrobe />}/>
          <Route path="/write" element={<Write/>}/>
          <Route path="/mypage" element={<Mypage/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
