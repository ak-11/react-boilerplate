import React, {Component} from 'react';

class Message extends Component {
  render() {
    
    const {userName, message} = this.props;

    return (
      <div className="message">
        <span className="username">{userName}</span>
        <span className="content">{message}</span>
      </div>
    )
  }
}
export default Message;
