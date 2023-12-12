import React from "react";
import Team from "../components/HomePage-components/Team";
import About from "../components/HomePage-components/About";
import Button from "../Shared/FormElements/Button";
import "./Home.css";
import Company from "../components/HomePage-components/Company";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="heading-texts">
          <h1>GetMySponsors</h1>
          <h2>Get your college fest sponsored</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            deserunt sapiente facere adipisci fugit veniam exercitationem iusto
            rerum? Magnam eveniet non asperiores eius sint, quasi reiciendis
            porro placeat maiores at aspernatur sunt voluptas enim, magni autem
            ut nesciunt cumque dicta ea id fugit velit assumenda. Minima,
            temporibus tempore.
          </p>
          <Button href="#about" inverse>
            Read More
          </Button>
        </div>
        <div className="home-img">
          {/* <img src="" alt="" /> */}
          <h1>Here will be an image</h1>
        </div>
      </div>
      <Company />
      <Team />
      <About />
    </>
  );
}
