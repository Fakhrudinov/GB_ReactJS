import './App.css';
import React, { useState, useEffect } from 'react';

function App(props) {
  
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');
  const [writer, setWriter] = useState([]); 

  useEffect(() => {
    if (messageList.length === 0) return;

    if(messageList[messageList.length - 1].author === "robot") return;

    // add auto reply message from robot
    setMessageList(
      [...messageList, { 
        text: `autoreply for author '${messageList[messageList.length - 1].author}'. Thanks for you message.`, 
        author: 'robot' }])

  }, [messageList]);

  const addMessage = () => {
    if(value.length > 0 && writer !== 'robot' && writer.length > 0 )
    {
      console.log(value + '--' + writer);
      setMessageList(
        [...messageList, { text: value, author: writer }]        
      )
    }
  };

  // do set in outer function, 
  const setNewAuthor = (event) => { 
    setWriter(event.target.value);
  };
  

  return (
    <div className='Back-color'>
      <div className="App">
        <h3>{props.nameOfProp}</h3>
        Author<input className="form_input author" value={writer} onChange={setNewAuthor}></input>{/* do set in outer function */}
        Message text<input className="form_input message_text" value={value} onChange={e => setValue(e.target.value)}></input>{/* do set here */}

        <button className="form_button" onClick={addMessage}>Send message</button>
      </div>
      {
        messageList.map((message) =>
          <div>
            <p>Message: <strong>{message.author}</strong>: {message.text}</p>
          </div>
        )
      }

    </div>
  )
};

export default App;
