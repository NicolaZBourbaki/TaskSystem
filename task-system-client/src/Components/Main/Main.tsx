import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg type="lines" bg={true} color=""/>
        <div className="row banner">
          <div className="banner-text">
              <h1 className="responsive-headline">Task System Management</h1>
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi facere architecto ipsum nihil, eos odio aliquam, assumenda autem tempora est ipsam labore, pariatur aspernatur ipsa iure inventore ducimus illum asperiores..</h3>
            <hr />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;