import React from "react";
import "./LandingPage.css";
import { useEffect } from "react";

//Components
import Content from "./Content/Content.js";
import Fade from "react-reveal/Fade";
import Particless from "../Common/Particles/Particless";
import video1 from "./Video/final.mp4";
import certificate from "../../assets/KDSH2022Certificates/Akash Kundu.png"

const LandingPage = () => {
  const eligibleCandidates = [
    ["Aman Sharma", "amankumarsharma4084@gmail.com"],
    ["Kushaz Sehgal", "kushaz.sehgal@gmail.com"],
    ["Jeevesh Mahajan", "jeevesh28mahajan@gmail.com"],
    ["Ater Murtem", "murtematu@gmail.com"],
    ["Balaji Udayagiri", "balajiatvizag@gmail.com"],
    ["Nancy Meshram", "nancymeshram02@gmail.com"],
    ["Apoorv Bansal", "bansalapoorv2015@gmail.com"],
    ["Krishna Yadav", "kyadav932000@gmail.com"],
    ["Pooja Sharma", "poojasharma201902@gmail.com"],
    ["Sanjeevani Ratna Tiwari", "iam.sanjeevanitiwari@gmail.com"],
    ["Rounak Saha", "rounaksaha12@gmail.com"],
    ["Sharannya Ghosh", "sharannyaghosh31@gmail.com"],
    ["Souvik Rana", "ranasouvik07@gmail.com"],
    ["Swarup Padhi", "swarupksms@gmail.com"],
    ["Shivam Raj", "shivsrj2580@gmail.com"],
    ["Rushil Venkateswar", "rushilv14@gmail.com"],
    ["Subhajyoti Halder", "subhajyotihalder72@gmail.com"],
    ["Anubhab Tripathi", "tripathianubhab@gmail.com"],
    ["Akash Kundu", "akashkundu2xx4@gmail.com"],
    ["Aayush Jitendra Kumar", "jitendra.kumar.epf@gmail.com"],
    ["Shaswat Sheshank", "sheshank.shaswat1111@gmail.com"],
    ["Avinash Kumar", "avinashjnvr@gmail.com"],
    ["Sandeep Mishra", "sandeepmishraismyname@gmail.com"]
  ];

  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets/KDSH2022Certificates", false, /.png/)
  );

  const downloadCertificate = () => {
    // let names = Object.keys(images);
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if(name == "" || email == "") {
      alert("Please enter the name and email address to download certificate!");
      return;
    }
    let flag = 0;
    const a = document.createElement("a");
    document.body.appendChild(a);
    
    eligibleCandidates.map((name_cand) => {
      if (
        name.toLowerCase() == name_cand[0].toLowerCase() &&
        email === name_cand[1]
      ) {
        a.href = images[name_cand[0] + ".png"].default;
        a.download = "Certificate.png";
        a.click();
        flag = 1;
      }
    });
    if(flag == 0){
      alert("Invalid credentials!");
    }
    console.log(flag);
    document.body.removeChild(a);
  };

  useEffect(() => {
    var modal = document.getElementById("modal-box");

    document
      .getElementById("modal-close")
      .addEventListener("click", function (e) {
        modal.style.display = "none";
      });

    const form = document.getElementById("form");
    const submitButton = document.getElementById("submitbtn");
    let scriptURL = "";

    form.addEventListener("submit", (e) => {
      submitButton.disabled = true;
      e.preventDefault();
      let requestBody = new FormData(form);
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      eligibleCandidates.map((name_cand) => {
        if (
          name.toLowerCase() == name_cand[0].toLowerCase() &&
          email === name_cand[1]
        ) {
          scriptURL =
            "https://script.google.com/macros/s/AKfycbz07q9MBjKxVwS1Yrv3X0whxB0MuSWEpCYeMc6kGx09hQOcXbJDctfCLa8xgnRnb0y7/exec";
        }
      });
      if (scriptURL == "") {
        alert("Please check in your credentials again!!");
        submitButton.disabled = false;
        return;
      }
      fetch(scriptURL, { method: "POST", body: requestBody })
        .then((response) => {
          alert(
            "Thank you for submitting!! We will look into it soon"
          );
          submitButton.disabled = false;
          modal.style.display = "none";
        })
        .catch((error) => {
          alert("Sorry an error has occured!!");
          submitButton.disabled = false;
        });
    });
  }, []);

  return (
    <>
      <div id="modal-click" className="modal-background">
        <br />
      </div>
      <div id="modal-box" class="modal-box">
        <label for="modal-click" id="modal-close" class="fas fa-times"></label>

        <div class="modal-content">
          <h1 class="modal-heading">KDSH Certificate Retrieval</h1>
          <form id="form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="John Smith"
                required
                name="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Your email"
                required
                name="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Any Problems in downloading the certificate?
              </label>
              <textarea
                className="form-control"
                id="textarea"
                rows="1"
                placeholder="Type here"
                name="Problems"
                required
              />
            </div>
            <div className="form-group" id="buttons">
              <button type="submit" className="btn btn-danger" id="submitbtn">
                Submit for issues
              </button>
            </div>
          </form>
          <button
            className="btn btn-warning"
            id="download"
            onClick={downloadCertificate}
          >
            Download the certificate
          </button>
        </div>
      </div>

      {/* Header Section */}
      <section className="banner">
        {/* <Header /> */}
        <a
          href="https://unstop.com/hackathon/kharagpur-data-science-hackathon-2022-indian-institute-of-technology-iit-kharagpur-542463"
          target="_blank"
          className="banner-video"
        >
          <video
            src={video1}
            height="600"
            width="auto"
            autoplay="true"
            muted
            loop
          ></video>
        </a>
      </section>

      {/* content section  */}
      <section className="section-contents">
        {/* <Fade bottom>
        <div className="Hackathon-button">
          <div className="Hackathon-button-button"><a href="http://tinyurl.com/kdshreg" target="_blank" rel="noreferrer noopener">Register for Kharagpur Data Science Hackathon</a></div>
        </div>
        </Fade> */}

        <div className="about-kdag-wrapper">
          <div className="about-kdag">
            {/* <Fade left> */}
            {/* <div className="about-kdag-image">
          <img src={logo} alt="LOGO" />
        </div> */}
            {/* </Fade> */}

            <Fade right>
              <div className="about-kdag-text">
                <h1 className="heading-about-kdag">About Us</h1>
                <hr className="rule-about-kdag" />
                <i>
                  "KDAG is aimed at bringing Data Analytics and Machine Learning
                  enthusiasts together under the umbrella of a single society,
                  and provide ample opportunities & resources that are required
                  to build a successful career in this emerging domain."
                </i>
              </div>
            </Fade>
          </div>
        </div>
        <Content />
      </section>

      {/* Contact Section */}
      {/*<section className="section-contacts">
        <Contact />
      </section>*/}

      <Particless />
    </>
  );
};

export default LandingPage;
