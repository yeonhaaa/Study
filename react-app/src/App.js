import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Subject } from './Subject';
import { TOC } from './TOC';
import { Content } from './Content.js';



//클래스
class App extends Component {
  constructor(probs) {
    super(probs);
    this.state = {
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information.'},
        {id: 2, title: 'CSS', desc: 'CSS is for design.'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive.'}
      ],
      mode: 'welcome',
      welcome: { title: 'welcome', desc: 'Hello, React' }
    }
  }
  render() {
    let title, desc;
    if(this.state.mode == 'welcome') {
      title = this.state.welcome.title;
      desc = this.state.welcome.desc;
    } else if (this.state.mode == 'html') {
      title = this.state.contents[0].title;
      desc = this.state.contents[0].desc;
    } else if (this.state.mode == 'CSS') {
      title = this.state.contents[1].title;
      desc = this.state.contents[1].desc;
    }  else if (this.state.mode == 'JavaScript') {
      title = this.state.contents[2].title;
      desc = this.state.contents[2].desc;
    }
    return (  // JSX
      <div className="App">
        <table border='1'>
          <tr>
            <td>1</td><td>2</td>
          </tr>
        </table>
        <Subject 
        title = {this.state.subject.title} 
        sub = {this.state.subject.sub}>
        </Subject>
        <TOC onChangePage={
          (value) => { this.setState({mode: value}) }
        } contents={this.state.contents}></TOC>
        <Content title={title} desc={desc}></Content>
      </div>
    );
  }
}

// 함수형식
// function App() {
//   return (  // JSX
//     <div className="App">
//       <table border='1'>
//         <tr>
//           <td>1</td><td>2</td>
//         </tr>
//       </table>
//     </div>
//   );
// }

export default App;
