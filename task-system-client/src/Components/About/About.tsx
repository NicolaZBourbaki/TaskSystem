import React, { Component } from "react";


class About extends Component {
  render() {

    const name = "Task management";
    const profilepic = "images/task-list-organization-to-do-notes-logo-design.jpg";
    const bio = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus commodi maxime accusantium id sapiente voluptatum! Assumenda nulla animi recusandae atque tenetur exercitationem odio incidunt dolorem, corrupti, quasi possimus pariatur!";
    const street = "Your street";
    const city = "Your city";
    const state = "Your state";
    const zip = "Your zip/postal code";
    const phone = "555-555-5555";
    const email = "youremail@gmail.com";
    const linkedinLink = "https://www.linkedin.com/";
    const FacebookLink = "https://uk-ua.facebook.com/";
    
    return (
      <section id="about">
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={FacebookLink} className="button">
                      <i className="fa fa-facebook"></i>Facebook
                    </a>
                    <a href={linkedinLink} className="button">
                      <i className="fa fa-linkedin"></i>Linkedin
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default About;