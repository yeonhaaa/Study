import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <h5>{this.props.contents[0]}</h5>
                <h5>{this.props.contents[1]}</h5>
                <h5>{this.props.contents[2]}</h5>
                <h5>{this.props.contents[3]}</h5>
                <h5>{this.props.contents[4]}</h5>
            </footer>
        );
    }
}

export { Footer };