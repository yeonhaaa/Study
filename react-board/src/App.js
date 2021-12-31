import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Header = () => {
  return (
    <div className="p-5 bg-primary text-white text-center">
      <h1>
        <a href="/signin" className="link-dark">
          로그인 후 사용해주세요.
        </a>
      </h1>
    </div >
  )
};
// ctrl + H : 값바꾸기
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
const Content = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4">
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div className="fakeimg">Fake Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3 className="mt-4">Some Links</h3>
          <p>Lorem ipsum dolor sit ame.</p>
        </div>
      </div>
    </div>
  )
}
const Footer = () => {
  return (
    <div className="mt-5 p-4 bg-dark text-white text-center">
      <p>Footer</p>
    </div>
  )
}
const SignUp = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <form onSubmit={(e) => {
          e.preventDefault(); //form 안에 button 이 있으면 button이 form을 동작시킴. 그걸 막음. 다른방법 : typenbutton
          // console.log(e);
          // console.log(e.target['0'].value);
          const formData = new FormData();
          const email = e.target['0'].value;
          const pwd = e.target['1'].value;
          const name = e.target['2'].value;
          formData.append("email", email);
          formData.append("pwd", pwd);
          formData.append("name", name);
          axios({
            url: 'http://127.0.0.1:8080/api/signup',
            method: 'POST',
            data: formData,
          }).then((res) => {
            console.log(res.data);
            window.location = '/';
          });
        }}>
          <div className="mb-3">
            <label for="email">Email:</label>
            <input type="text" className="form-control" id="email" name="email"></input>
          </div>
          <div className="mb-3">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" name="pwd"></input>
          </div>
          <div className="mb-3">
            <label for="name">Name:</label>
            <input type="text" className="form-control" id="name" name="name"></input>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" id="signup">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}
const SignIn = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <form onSubmit={(e) => {
          e.preventDefault();
          const email = e.target['0'].value;
          const pwd = e.target['1'].value;
          const formData = new FormData();
          formData.append("email", email);
          formData.append("pwd", pwd);
          axios({
            url: 'http://localhost:8080/api/signin',
            method: 'POST',
            data: formData
          }).then((res) => {
            console.log(res.data);
            if (res.data.code == 200) {
              // 로그인성공
              alert('로그인 되었습니다.');
              // JWT 와 같은 토큰값을 저장
              sessionStorage.setItem("token", 1234);
            } else {
              // 로그인실패
              alert('이메일과 비밀번호를 확인해주세요.');
            }
          });
        }}>
          <div className="mb-3 input-group flex-nowrap">
            <span className="input-group-text">💻</span>
            <input type="text" className="form-control" name="email" placeholder="email"></input>
          </div>
          <div className="mb-3 input-group flex-nowrap">
            <span className="input-group-text">🔒</span>
            <input type="password" className="form-control" name="pwd" placeholder="password"></input>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" id="signin">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}
const BoardList = () => {
  const [list, setList] = useState([]);

  useEffect(() =>{
    axios({
      url: 'http://localhost:8080/api/board/list',
      method: 'GET'
    }).then((res) => {
      setList(res.data);
      console.log(res.data);
    });
  }, []); // deps 

  return (
    <div class="container mt-5">
      <div class="row">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>번호</th><th>제목</th><th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {list.map((v) => {
              return (
                <tr>
                  <td>{v.id}</td>
                  <td>{v.title}</td>
                  <td>{v.userId}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button type="button" class="btn btn-primary btn-block" id="write-btn">글쓰기</button>
      </div>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/board/list" element={<BoardList />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
