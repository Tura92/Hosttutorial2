import React, { Component } from "react";
//import styles from "./styles.css";

class Responsive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/*<!-- Header Showcase -->*/}
        <header id="showcase" className="grid">
          <div className="bg-image" />
          <div className="content-wrap">
            <h1>Welcome to Acme Web Solutions</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              eum error earum soluta voluptatum nisi laboriosam eos saepe
              asperiores dolorum.
            </p>
            <a href="#section-b" className="btn">
              Read More
            </a>
          </div>
        </header>

        {/*<!-- Main Area -->*/}
        <main id="main">
          {/*<!-- Section A -->*/}
          <section id="section-a" className="grid">
            <div className="content-wrap">
              <h2 className="content-title">Web & Application Development</h2>
              <div className="content-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  sint eligendi possimus? Unde officiis magnam laborum ipsa
                  distinctio odio, vero dolores dicta aliquam aperiam
                  repellendus. Perferendis officiis deserunt velit voluptas
                  nobis sequi animi totam, accusantium, ex eius quia, natus quo?
                </p>
              </div>
            </div>
          </section>

          {/*!-- Section B -->*/}
          <section id="section-b" className="grid">
            <ul>
              <li>
                <div className="card">
                  <img
                    src="https://static.pexels.com/photos/574077/pexels-photo-574077.jpeg"
                    alt=""
                  />
                  <div className="card-content">
                    <h3 className="card-title">Web Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum culpa neque quo eum et quasi velit voluptatum cum
                      maiores exercitationem.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <img
                    src="https://static.pexels.com/photos/261628/pexels-photo-261628.jpeg"
                    alt=""
                  />
                  <div className="card-content">
                    <h3 className="card-title">Mobile Applications</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum culpa neque quo eum et quasi velit voluptatum cum
                      maiores exercitationem.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <img
                    src="https://static.pexels.com/photos/265087/pexels-photo-265087.jpeg"
                    alt=""
                  />
                  <div className="card-content">
                    <h3 className="card-title">Tech Marketing</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum culpa neque quo eum et quasi velit voluptatum cum
                      maiores exercitationem.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/*<!-- Section C -->*/}
          <section id="section-c" className="grid">
            <div className="content-wrap">
              <h2 className="content-title">
                We handle all of your digital needs
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                nam rerum vel earum error fugiat cupiditate, dolore eius! Minus,
                explicabo.
              </p>
            </div>
          </section>

          {/*<!-- Section D -->*/}
          <section id="section-d" className="grid">
            <div className="box">
              <h2 className="content-title">Contact Us</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
                suscipit. Rerum ducimus a quod, ut et voluptas obcaecati unde
                fuga.
              </p>
              <p>contact@acmewebsolutions.test</p>
            </div>
            <div className="box">
              <h2 className="content-title">About Our Company</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio earum porro deserunt, deleniti, quae facere
                repudiandae, officiis est exercitationem nobis iusto doloremque!
                Soluta excepturi in aut suscipit amet temporibus quo?
              </p>
            </div>
          </section>
        </main>

        {/*<!-- Footer -->*/}
        <footer id="main-footer" className="grid">
          <div>Acme Web Solutions</div>
          <div>
            Project By{" "}
            <a href="http://traversymedia.com" target="_blank">
              Traversy Media
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Responsive;
