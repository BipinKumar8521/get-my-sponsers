import React, { useState, useEffect } from "react";
import "./Company.css";
import CompanyData from "../../data/Company-data.json";
import Card from "../../Shared/UIElements/Card";

export default function Company() {
  const SLIDE_WIDTH = 53;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {}, []);

  const handleNext = () => {
    if (isLast) {
      return;
    }

    if (CompanyData.length - 1 === currentIndex) {
      setIsLast(true);
      return;
    }
    setIsFirst(false);

    setCurrentIndex((currentIndex) => currentIndex + 1);
  };

  const handlePrev = () => {
    if (isFirst) {
      return;
    }
    if (currentIndex === 0) {
      setIsFirst(true);
      return;
    }
    setIsLast(false);
    setCurrentIndex((currentIndex) => currentIndex - 1);
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * SLIDE_WIDTH}vw)`,
    transition: "transform 0.8s ease-in-out",
  };
  return (
    <div className="company">
      <h1>Companies we have served</h1>
      <div className="company-container" style={slideStyle}>
        {CompanyData.map((element, index) => (
          <Card
            className="company-details"
            onClick={() => setCurrentIndex(index)}
            key={index}
          >
            <div className="company-logo">
              <img src={element.ImgUrl} alt="logo" style={{ width: "30vw" }} />
            </div>
            <div className="company-name">
              <h3> {element.name} </h3>
            </div>
            <div className="company-description">
              <h5>{element.description}</h5>
            </div>
          </Card>
        ))}
      </div>
      <i
        className="fa-solid fa-chevron-left left-arrow"
        onClick={handlePrev}
      ></i>
      <i
        className="fa-solid fa-chevron-right right-arrow"
        onClick={handleNext}
      ></i>
    </div>
  );
}
