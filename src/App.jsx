import { Component } from 'react'
import Comics from './Comics.jsx'
import Favs from './Favs.jsx'
import View from './View.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import reduxLogo from '/redux.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav,Container} from "react-bootstrap"
import { BrowserRouter, Route, Routes , Link } from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
  }

  Header(){
    return(
      <header className="App-header">     
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Brand className='App-logo me-0' onClick={()=>{this.setState({page:0})}}>
                <img src="/marvellogo.png" width="150" className="align-top" alt="logotipo"/>
              </Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link as="div"><Link to="/">Comics</Link></Nav.Link>
                <Nav.Link as="div"><Link to="/fav/"> favoritos</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
  
  Footer(){
    return(
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reduxLogo} className="logo react" alt="React logo" />
        </a>
        <p>
          juan sebastian hernandez 2023
        </p>
      </div>
    );
  }

  render(){
    return (
      <>
        <BrowserRouter>
          {this.Header()}
          <Routes>
            <Route path="/" element={<Comics/>} />
            <Route path="/fav/" element={<Favs />} />
            <Route path="/view/:id" element={<View/>} />
            <Route path="*" element={<View/>} />
          </Routes>
        </BrowserRouter>
        {this.Footer()}
      </>
    )
  }
  
}

export default App
