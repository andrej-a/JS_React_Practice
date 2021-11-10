import React from 'react';
import './App.css';

const Header = () => {
  return <h2>TESTING</h2>
};


class Field extends React.Component {
    render() {
      const holders = "Write here."
  const styles = {
    width: "300px"
  }
  return <input
  type = "text"
  placeholder = {
    holders
  }
  style = {
    styles
  }
/>;
    }
}

function Btn() {
 const text = "Log in";
 const logged = false;
  return <button>{logged ? "Enter" : text}</button>
}

function App() {
  return (
    <div className="App">
        <Header/>
        <Field></Field>
        <Btn></Btn>
    </div>
  );
}
export default App;
