import React, { useState } from 'react';
import "./EightBall.css";

/* Get a random element from an array */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}
//The EightBall will need state to keep track of the current color and message text,
// and this state should initially be “black” and “Think of a Question”
function EightBall(props){
  const [msg, setMsg] = useState("Think of a Question.");
  const [color, setColor] = useState("black");
  
  //handle user submission of function Choice usiong their values.
  function submit() {
    const { msg, color } = choice(props.answers);
    setMsg(msg);
    setColor(color);
  }

  //execute submit function on click, set background color and message from props.
  //Make it so that the ball chooses a random message when it is clicked on. 
  //This should change the background color of the ball and the message. 
  return (
    <div
      className="EightBall"
      onClick={ submit }
      style={{backgroundColor: color }}>
        <b>{msg}</b>
    </div>
  )
}

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "lime" },
    { msg: "Without a doubt.", color: "aquamarine" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "yellow" },
    { msg: "Ask again later.", color: "gold" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]
}

export default EightBall;