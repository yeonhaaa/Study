import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Routes, Route, Link, NavLink, Outlet
} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}
function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...

      <ul>
        <li><NavLink to='/topics/1'>HTML</NavLink></li>
        <li><NavLink to='/topics/2'>JS</NavLink></li>
        <li><NavLink to='/topics/3'>React</NavLink></li>
      </ul>

      <Outlet />
      <hr></hr>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function Topic() {
  return (
    <div>Topic...</div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM Example</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/topics">Topics</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/topics" element={<Topics></Topics>}>
            <Route path="1" element={<Topic />}></Route></Route>
            {/* <Route path="2" element={<Topic />}></Route>
            <Route path="3" element={<Topic />}></Route></Route>
          <Route path="/contact"
            element={<Contact></Contact>}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;
