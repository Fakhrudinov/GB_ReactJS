import './Message.css';

function Message(props) {
  return (
    <div className="div-styler">Message props is {props.myNewProp}</div>
  );
}

export default Message;