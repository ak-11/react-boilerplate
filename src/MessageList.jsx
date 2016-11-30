import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

  nameAndMessage () {
    return this.props.messages.map((message, index) => {
      return (
        <Message key={index} userName={message.username} message={message.content} />
      )
    })
  }

  render() {

    return (
    <div id="message-list">
      {this.nameAndMessage()}
      <div className="message system">
      </div>
    </div>
    );
  }
}
export default MessageList;
