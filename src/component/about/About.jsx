import React from "react";
import "./About.css";
// import Image from "../../assest/avatar-2.svg";
// import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        {/* <img src={Image} alt="" className="about_img" /> */}

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              Hi there, I'm Muhammad Amirul Fitri and I graduated from UiTM with
              a degree in computer science and mathematics. I have a solid
              background in web technologies and software development. I have
              worked with frameworks like Quasar and React firsthand. I have
              effectively finished projects with complex input handling and
              dynamic web apps. In addition, I have a strong desire to use my
              technical expertise in web development and UI/UX design to support
              creative projects and always grow in a team atmosphere.
            </p>
            <a href="https://drive.google.com/file/d/1m5zXKEbVMRrKiAbHJvjHfXuYedFXCVxH/view?usp=sharing" className="btn" download>
              <i class="fa-solid fa-download"></i>&nbsp;&nbsp;&nbsp;Resume
            </a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_title">
                <h3 className="skills_name">Programming</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage sp1"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_title">
                <h3 className="skills_name">UI/UX Design</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage sp2"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_title">
                <h3 className="skills_name">Communication</h3>
                <span className="skills_number">75%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage sp3"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_title">
                <h3 className="skills_name">Teamwork</h3>
                <span className="skills_number">75%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage sp4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <AboutBox /> */}
    </section>
  );
};

export default About;
