import { useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import loginImg from '../assets/login.png'
import logoutImg from '../assets/logout.png'
import mypageImg from '../assets/mypage.png'
import searchImg from '../assets/search.png'
import writeImg from '../assets/write.png'
import { Container, Form, Nav, Navbar, Col, Row } from "react-bootstrap";

const imgStyle = {
  width:"20px",
  height:"20px"
}

const Header = () => {

  const logout = () => {
    // if(this.$store.state.user.sso === 0) {
    //   window.Kakao.Auth.logout((response) => {
    //     console.log(response);
    //     this.$store.commit("user", {});
    //   })
    // }
    // else{
    //   this.$store.commit("user", {});
    // }
    alert('로그아웃');
  }

  const [login, setLogin] = useState(false);

  return (
    <header style={{borderBottom: "1px solid #ddd"}}>
      <div style={{backgroundColor: "#000", height:"8px"}}></div>
      <Container className="text-center">
        <Row className="align-items-center">
          <Col>
            <h1 className="pt-3">
              <Link to="/" style={{color:"#000", textDecoration:"none"}}>
                WEATHEROBE
              </Link>
            </h1>
          </Col>
        </Row>
      </Container>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link className="nav-link" id="daily-look"  to="/">Home</Link>
              <Link className="nav-link" id="daily-look"  to="/dailylook">DailyLook</Link>
              <Link className="nav-link" id="my-wardrobe" to="/wardrobe">MyWardrobe</Link>
            </Nav>
            <Form className="d-flex">
                <Link  className="navbar-brand" to="/write">
                  <img src={writeImg} width="24px" height="24px"/>
                </Link>
                <Link className="navbar-brand" to="/mypage">
                  <img src={mypageImg} style={{width:"24px", height:"24px"}}/>
                </Link>
                <Link className="navbar-brand" to="/search">
                  <img src={searchImg} style={imgStyle}/>
                </Link>

                {(login) 
                  ?
                  <Link className="navbar-brand" style={{cursor: "pointer"}} onClick={logout}>
                      <img src={logoutImg} style={imgStyle}/> <small><b>logout</b></small>
                  </Link>
                  :
                  <Link className="navbar-brand" to="/login">
                      <img src={loginImg} style={imgStyle}/> <small><b>login</b></small>
                  </Link>
                }
                
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  
  )
}

export default Header;