import React, { useEffect, useRef } from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import gsap from "gsap";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <div className='wrapper'>
            <div className='home'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/opportunities' component={Opportunities} />
                <Route exact path='/solutions' component={Solutions} />
                <Route exact path='/contact-us' component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function Home() {

  let info = useRef(null);

  useEffect(() => {
     {
      fadeInUp(info);
    }
  });

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: .2,
      opacity: 0,
      ease: "power3.inOut"
    });
  }


  return (
    <div className='container'>
      <div className='wrapper'>
        <h5 ref={el => (info = el)}>
          The <b>FACTIO</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights in the area of fake news.
        </h5>
      </div>
    </div>
  );
}
export default App;
