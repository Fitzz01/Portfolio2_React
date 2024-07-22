import React from "react";

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
      <div className="about_box">
        <i className="about_icon icon-cup"></i>

        <div>
          <h3 className="about_title">19</h3>
          <span className="about_subtitle">Cup of Coffee</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-people"></i>

        <div>
          <h3 className="about_title">21</h3>
          <span className="about_subtitle">Satisfied Client</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-badge"></i>

        <div>
          <h3 className="about_title">54</h3>
          <span className="about_subtitle">Nominess Winner</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
