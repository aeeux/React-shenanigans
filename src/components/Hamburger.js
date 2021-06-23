import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Hamburger = ({state}) => {
  //vars for our animated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
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
      gsap.to(menu, {
        duration: 0,
        css: {display: "block"}
      });
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: .8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 2,
      ease: 'power3.inOut',
      stagger: {
        amount: .1
      }
    })
  }

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: .8,
      y: 100,
      delay: .2,
      ease: "power3.inOut",
      stagger: {
        amount: .3
      }
    });
  }

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: .2,
      opacity: 0,
      ease: "power3.inOut"
    });
  }

  const handleCity = city => {
    gsap.to(cityBackground, {
      duration: 0,
      background: `url(${city}) center center`
    })
    gsap.to(cityBackground, {
      duration: .4,
      opacity: 1,
      ease: "power3.inOut"
    })
    gsap.from(cityBackground, {
      duration: .4,
      skewY: 2,
      transformOrigin: "right top"
    })
  }

  const handleCityReturn = () => {
    gsap.to(cityBackground, {
      duration: .4,
      opacity: 0
    });
  };

  const handleHover = e => {
    gsap.to(e.target, {
      duration: .3,
      y: 3,
      skewX: 4,
      ease: "power3.inOut"
    });
  };
  
  const handleHoverExit = e => {
    gsap.to(e.target, {
      duration: .3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut"
    });
  }

  return (
  <div ref={el => (menu = el)} className='hamburger-menu'>
    <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color"></div>
    <div ref={el => (revealMenu = el)} className="menu-layer">
      <div ref={el => (cityBackground = el)} className="menu-city-background">
        
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link 
                  onMouseEnter={e => handleHover(e)}
                  onMouseOut={e => handleHoverExit(e)}
                  ref={el => (line1 = el)} to="/opportunities">
                    T-Rex
                  </Link>
                </li>
                <li>
                  <Link 
                  onMouseEnter={e => handleHover(e)}
                  onMouseOut={e => handleHoverExit(e)}
                  ref={el => (line2 = el)} to="/solutions">
                    Spiser
                  </Link>
                </li>
                <li>
                  <Link 
                  onMouseEnter={e => handleHover(e)}
                  onMouseOut={e => handleHoverExit(e)}
                  ref={el => (line2 = el)} to="/contact-us">
                    Lurt
                  </Link>
                </li>
                <li>
                  <Link 
                  onMouseEnter={e => handleHover(e)}
                  onMouseOut={e => handleHoverExit(e)}
                  ref={el => (line3 = el)} to="/contact-us">
                    årjaer
                  </Link>
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
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hamburger;
