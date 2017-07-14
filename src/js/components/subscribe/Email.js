import React, {Component} from 'react';

class Email extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({email: e.target.value});
  }

  render() {
    return (
      <div className="subscribe-email-block">
        <div className="subscribe-email">
          <input type="email" className="subscribe-email-input" value={this.state.email} onChange={this.handleChange} placeholder="Your email address"/>
          <span className="fa fa-angle-right email-arrow"></span>
        </div>
      </div>
    );
  }
}

export default Email;
