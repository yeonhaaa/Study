
import { Component } from 'react';

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href={this.props.contents[0].id + '.html'}
              onClick={(e) => {
                this.props.onChangePage('html');
                e.preventDefault();
              }}>
              {this.props.contents[0].title}
            </a>
          </li>
          <li>
          <a href={this.props.contents[1].id + '.html'}
              onClick={(e) => {
                this.props.onChangePage('CSS');
                e.preventDefault();
              }}>
              {this.props.contents[1].title}
            </a>
          </li>
          <li>
          <a href={this.props.contents[2].id + '.html'}
              onClick={(e) => {
                this.props.onChangePage('JavaScript');
                e.preventDefault();
              }}>
              {this.props.contents[2].title}
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export { TOC };