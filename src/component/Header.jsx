import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import loginImg from '../assets/login.png'
import logoutImg from '../assets/logout.png'
import mypageImg from '../assets/mypage.png'
import searchImg from '../assets/search.png'
import writeImg from '../assets/write.png'


const imgStyle = {
  width:"20px",
  height:"20px"
}

const Header = () => {

  const logout = () => {
    if(this.$store.state.user.sso === 0) {
      window.Kakao.Auth.logout((response) => {
        console.log(response);
        this.$store.commit("user", {});
      })
    }
    else{
      this.$store.commit("user", {});
    }
    alert('로그아웃');
  }

  return (
    <header style={{borderBottom: "1px solid #ddd"}}>
      <div style={{backgroundColor: "#000", height:"8px"}}></div>
      <div className="container text-center" >
        <div className="row align-items-center">
          <div className="col">
            <h1 className="pt-3">
              <Link to="/" style={{color:"#000", textDecoration:"none"}}>
                WEATHEROBE
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight: "100px;"}}>
              <li className="nav-item">
                <Link className="nav-link" id="daily-look" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="daily-look" aria-current="page" to="/dailylook">DailyLook</Link>
              </li>
              <li  className="nav-item">
                <Link className="nav-link" id="my-wardrobe" aria-current="page" to="/wardrobe">MyWardrobe</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link  className="navbar-brand" to="/write">
                <img src={writeImg} width="24px" height="24px"/>
              </Link>
              <Link className="navbar-brand" to="/mypage">
                <img src={mypageImg} style={{width:"24px", height:"24px"}}/>
              </Link>
              <Link className="navbar-brand" to="/search">
                <img src={searchImg} style={imgStyle}/>
              </Link>
              <Link className="navbar-brand" to="/login">
                  <img src={loginImg} style={imgStyle}/> <small><b>login</b></small>
              </Link>
              <a className="navbar-brand" style={{cursor: "pointer"}} onClick={logout}>
                  <img src={logoutImg} style={imgStyle}/> <small><b>logout</b></small>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </header>
  
  )
}

export default Header;