import React from "react";

function WelcomeMsg(props) {
  const msg = "Welcome Message";
  const clicked ="Have a good day!";
  let text = msg;
  return (
    <section className="welcome" onClick={() => {alert(text)}}>
      <h1 className="welcome-msg">{text}</h1>
    </section>
  );
}

export default WelcomeMsg;