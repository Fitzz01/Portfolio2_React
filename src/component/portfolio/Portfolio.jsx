import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section_title">Recent Works</h2>

      <p>
        It includes a wide variety of projects that highlight my proficiency in
        web programming and ui/ux design. I work hard to provide excellent work
        that goes above and beyond expectations. I have an excellent eye for
        detail and a passion for creativity.
      </p>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>
          All
        </span>
        <span className="work_item" onClick={() => filterItem("Web")}>
          Web Development
        </span>
        <span className="work_item" onClick={() => filterItem("App")}>
          App
        </span>
        <span className="work_item" onClick={() => filterItem("Design")}>
          Design
        </span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>

              {/* Here put link to all recent work */}
              <a href={link} className="work_button" download target="_blank">
                {/* <i className="icon-plus work_button-icon"></i> */}More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
