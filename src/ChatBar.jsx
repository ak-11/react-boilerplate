import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {

    super(props);

    this.state = {newMessage: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({newMessage: event.target.value});
    // return this.state.newMessage;
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {

    const {userName} = this.props;

    return (
      <form onSubmit={this.handleSubmit} value="submit">
        <footer>
          <input id="username" type="text" placeholder="Your Name (Optional)" value={userName} />
          <input id="new-message" type="text" placeholder="Type a message and hit ENTER" onChange={this.handleChange} value={this.state.newMessage} />
        </footer>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default ChatBar;
