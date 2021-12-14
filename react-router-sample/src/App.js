import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Header() {
  return (
    <header>
        <h1>WEB</h1>
        World Wide Web!
    </header>
  );
}//메소드 끝날땐 ;안써도 된다.

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><a href="/html">HTML</a></li>
            <li><a href="/css">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
    </nav>
  );
};

const Article = () => {
  return(
  <article>
    <h2>HTML</h2>
    HTML is HyperText Markup Language.
  </article>);
}; 

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/content/*' element={<Article />}></Route>
          {/* <Route path='/css' element={<Article />}></Route> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
