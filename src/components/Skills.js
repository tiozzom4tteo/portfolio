import seventy_five from "../assets/img/75.svg";
import fifty from "../assets/img/50.svg";
import sixty from "../assets/img/60.svg";
import seventy from "../assets/img/70.svg";
import { Helmet } from "react-helmet";
import eighty from "../assets/img/80.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

const skills = [
  { image: seventy, name: "C++" },
  { image: fifty, name: "Python" },
  { image: eighty, name: "PhP" },
  { image: sixty, name: "Javascript" },
  { image: seventy, name: "Qt" },
  { image: seventy, name: "English" },
];

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Helmet>
        <title>Skills</title>
        <meta
          name="description"
          content="javascript, english, php, python, c++, qt, cybersecurity, sql"
        />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                During my years in college studying Computer Science, I have
                acquired a variety of new skills. In my first year, I gained
                knowledge on C programming, while in the second year, I focused
                on utilizing Qt and C++ to develop a project called
                "Sensor_Data_Factory" for the "Object Oriented Programming"
                course. Additionally, I also learned how to utilize Python for
                the Cybersecurity course and created a SQL database for the
                "Basi di dati" course. In my third year, I utilized PhP for the
                backend, as well as Javascript, HTML, and CSS for the
                "Tecnologie Web" course, in order to construct an e-commerce
                platform called ML Tech. Throughout these three years, I have
                also enhanced my proficiency in the English language. Currently,
                I am expanding my knowledge in cybersecurity. These are my
                abilities:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div key={index} className="item">
                    <img src={skill.image} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
