import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

  //With React, when you're inside a Class, functions do not need Const of Let when declaring.
  //A potentially cleaner way of writing this is to include it inside of the HTML/JSX code.
  nameAndMessage () {
    return this.props.messages.map((message, index) => {
      return (
        <Message key={message.uniqueID} userName={message.username} message={message.content} />
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
