import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: 'Bob',
          content: 'Bob Dole....Bob Dole.......Bob Dol...',
          uniqueID: 1
        },
        {
          username: 'Brian',
          content: 'You alive Bob?',
          uniqueID: 2
        }
      ]
    }
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    setTimeout(() => {
      console.log('Simulating incoming message');
      // Add a new message to the list of messages in the data store
      const newMessage = {uniqueID: 3, username: 'Stewie', content: 'What the deuce?!'};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  render() {

    return (
      <div className='wrapper'>
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar userName={this.state.currentUser.name} />
      </div>
    );
  }

}

export default App;
