import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Hamburger = ({state}) => {
  //vars for our animated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let CityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if(state.clicked === false) {
      //close our menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: .8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: .07
        }
      });
      gsap.to(menu, {
        duration: 1,
        css: {display: "none"}
      });
    } else if (
      state.clicked === true || 
      state.clicked === true && state.initial === null 
      ) {
      //open our menu
      menu.style.display = "block";
    }
  });

  return (
  <div ref={el => (menu = el)} className='hamburger-menu'>
    <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color"></div>
    <div ref={el => (revealMenu = el)} className="menu-layer">
      <div className="menu-city-background">
        
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link ref={el => (line1 = el)} to="/opportunities">Opportunities</Link>
                </li>
                <li>
                  <Link ref={el => (line2 = el)} to="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link ref={el => (line3 = el)} to="/contact-us">Contact us</Link>
                </li>
              </ul>
            </nav>
            <div ref={el => (info = el)} className="info">
              <h3>Our promise</h3>
              <p>
                The passage experienced a surge in popularity during the 1960s
                when the letraset used it on their dry-transfer sheets, and again
                during the 90s as desktop publishers bundled the text with
                their software.
              </p>
            </div>
            <div className="locations">
              Locations:
              <span>Dallas</span>
              <span>Austin</span>
              <span>Newyork</span>
              <span>San Francisco</span>
              <span>Beijing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hamburger;
