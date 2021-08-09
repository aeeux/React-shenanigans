import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = ({ history }) => {
  //state for menu button
  const [state, setState ] = useState({
    initial: false,
    clicked: null,
    menuName:"Menu"
  })

  //state for disabled button
  const [disabled, setDisabled] = useState(false);

  //useEffect for page changes
  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  });

  const handleMenu = () => {
    //on initial load of website, menu is set to false/closed
    disableMenu();
    if(state.initial === false) {
       setState({
        initial: null,
        clicked: true,
        menuName: 'Close'
      });
    } //menu and close is then going to switch back and forth depending on users interaction
      else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    } 
  };

  //determine if our menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };



  return (
  <header>
    <div className="container">
      <div className="wrapper">
        <div className="inner-header">
          <div className="logo">
            <Link to='/'>NOCTES INSOMNES</Link>
          </div>
          <div className="menu">
            <button disabled={disabled} onClick={handleMenu}><i className="fas fa-align-right"></i>Menu</button>
          </div>
        </div>
      </div>
    </div>
    <Hamburger state={state} />
  </header>
  );
};

export default withRouter(Header);
