import './App.css';
import Message from './Message';

const _localConst = 123123

function App(props) {
  return (
    <div className="App">
      <header className="App-header Back-color">
        Some local const is {_localConst}
        <h2 style={{color: 'red'}}>Header 2 with prop {props.nameOfProp}</h2>
        <div>Date/Time is {props.dt}</div>
        <p style={{color: props.paintColor || 'blue'}}>playig with css styles. Prop is {props.paintColor}</p>
        <p>playig with props sended. Is 'paintColor' sended? {props.paintColor ? 'yes' : 'no'}</p>
      </header>

      <div className="Back-color">I'm Message.js from App.Js!
        <Message myNewProp={_localConst} />
      </div>
    </div>
  );
}

export default App;
