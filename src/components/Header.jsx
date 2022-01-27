import React from "react";

function Header(props) {
  return (
    <header style={{ color: props.color, backgroundColor: props.bgColor }}>
      <div className="container">
        <h2>{props.title}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "Feedback App",
  bgColor: "black",
  color: "pink",
};

export default Header;
