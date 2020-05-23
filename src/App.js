import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div class="logo">George Brown Blockchain Development Program</div>
          <ul class="navbar-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div class="home-section" id="home">
          <div class="text">
            <h1 class="banner">
              George Brown has launched the first Canadian Blockchain Program
            </h1>
          </div>
        </div>

        <div class="about-section" id="about">
          <p class="info">
            As the only Canadian College to offer a full-time blockchain
            program, George Brown joins prestigious educational institutions
            like Princeton and MIT to contribute to developing Ontario and
            Canada-wide blockchain community.
          </p>
          <h2 class="header2"> More information about this program </h2>
          <p class="info2">
            Program Name: Blockchain Development
            <br></br>
            <br></br>
            Code: T175
            <br></br>
            <br></br>
            Credential: George Brown College Certificate
            <br></br>
            <br></br>
            Method of Study: Full-time
            <br></br>
            <br></br>
            Duration: 1 year (3 semesters)
            <br></br>
            <br></br>
            Centre: Arts, Design & Information Technology
            <br></br>
            <br></br>
            School: Computer Technology
            <br></br>
            <br></br>
            Location: Casa Loma Campus
            <br></br>
            <br></br>
            Starting Months: January, September
            <br></br>
            <br></br>
            Domestic Tuition: $7,188.00* ‡<br></br>
            <br></br>
            Experiential Learning: Mandatory Co-op or Work Integrated Learning
            <br></br>
          </p>
        </div>

        <div class="contact-section" id="contact">
          <div class="container1">
            <address>
              <p>Contact Us:</p>

              <p>School of Computer Technology</p>

              <p>
                Phone: <a href="tel:416-415-5000">416-415-5000 ext. 4287</a>{" "}
              </p>

              <p>
                Email:{" "}
                <a href="mailto:computertechnology@georgebrown.ca">
                  computertechnology@georgebrown.ca
                </a>
              </p>

              <p>
                The office hours are: Monday – Thursday: 8 a.m. – 7 p.m. Friday:
                8 a.m. – 4 p.m.
              </p>

              <p>Program Co-ordinator: Ceit Butler</p>
              <p>
                Email:{" "}
                <a href="mailto:Ceit.Butler@georgebrown.ca">
                  Ceit.Butler@georgebrown.ca
                </a>
              </p>
              <p>
                Phone:
                <a href="tel:416-415-5000">416-415-5000 x 3785</a>
              </p>
            </address>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
