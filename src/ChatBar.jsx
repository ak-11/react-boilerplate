import React, {Component} from 'react';

class ChatBar extends Component {
  render() {

    const {userName} = this.props;
    return (
      <footer>
        <input id="username" type="text" placeholder="Your Name (Optional)" value={userName}/>
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}
export default ChatBar;
