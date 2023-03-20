import { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <>
        <h5>{this.props.title}</h5>
        {this.props.children}
      </>
    );
  }
}

export default Section;
