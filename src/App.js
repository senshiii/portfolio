import { Fragment, useEffect, useRef, useState } from "react";
import TypeIt from "typeit-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { work } from "./assets/files/data";

import Navbar from "./components/Layout/Navbar";

import DP from "./assets/images/pic.jpg";
import Terminal from "./components/Terminal/Terminal";

const App = () => {
  const scrollRef = useRef();
  const [currentWork, setCurrentWork] = useState(0);

  useEffect(() => {
    document.body.addEventListener("scroll", () => {
      if (document.body.scrollTop > 0) {
        scrollRef.current.style.display = "none";
      } else {
        scrollRef.current.style.display = "inline";
      }
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Terminal />

      <section className="home_banner">
        <div className="backdrop">
          <div className="left" />
        </div>

        <div className="headshot">
          <img src={DP} alt="Sayan Das" />
        </div>
        <h1>
          Hello World ! I am <span className="green-text">Sayan Das</span>{" "}
        </h1>
        <br />
        <TypeIt
          element={"h1"}
          options={{ speed: 85, delay: 850, strings: "I am a " }}
          style={{ width: "75%" }}
          getBeforeInit={(instance) => {
            instance
              .type('<span class="green-text">Web Developer</span>')
              .pause(750)
              .delete(13, { speed: 100 })
              .type('<span class="green-text">Competitive Coder</span>')
              .pause(750)
              .delete(17, { speed: 100 })
              .type('<span class="green-text">Blogger</span>')
              .pause(750)
              .delete()
              .type('Nice to Meet <span class="green-text" >You</span> !! : )')
              .go();
            return instance;
          }}
        />

        <div className="icons">
          <a target="_blank" rel="noreferrer" href="https://www.google.com">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.google.com">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://sayand031999.medium.com/"
          >
            <FontAwesomeIcon icon={["fab", "medium"]} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.google.com">
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
        </div>

        <a
          href="#more"
          onClick={() => document.body.scrollTo(0, window.innerHeight)}
          className="go_down"
          ref={scrollRef}
        >
          Scroll Down <FontAwesomeIcon icon="chevron-down" />
        </a>
      </section>

      <section className="work" id="work">
        <div className="work-folder">
          <div className="folder-header">
            <h3>My Work Exeriences</h3>
          </div>
          <div className="folder-body">
            <div className="tree">
              <p style={{ marginRight: "1.2rem" }}>
                <FontAwesomeIcon
                  icon="folder"
                  style={{ fontSize: "1.2rem", color: "#105e07" }}
                />
              </p>
              <div className="tree-line" />
              <div className="company-list">
                {work.map((w, index) => (
                  <h3
                    className={currentWork === index ? "selected" : ""}
                    key={index}
                    onClick={() => setCurrentWork(index)}
                  >
                    <span className="bar"></span> {w.companyName}
                  </h3>
                ))}
              </div>
            </div>

            <div className="work-info">
              <h1>{work[currentWork].role}</h1>
              <p>
                <FontAwesomeIcon icon="laptop-code" />
                &nbsp; Job Type : {work[currentWork].roleType}
              </p>
              <p>
                <FontAwesomeIcon icon="calendar" />
                &nbsp; Calendar : {work[currentWork].calendar}
              </p>
              <p>
                <FontAwesomeIcon icon={["far", "clock"]} />
                &nbsp; Duration : {work[currentWork].duration}
              </p>
              <hr className="divider" />
              <h3>Responsibilities : </h3>
              <ul>
                {work[currentWork].responsibilities.map((res, index) => (
                  <li key={index}>{res}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default App;
