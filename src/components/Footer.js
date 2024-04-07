import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="foot my-5"
        id="contact"
        style={{
          backgroundColor: "black",
          height: "300px",
          color: "white",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <div
          className="get"
          style={{ position: "relative", top: "0px", left: "40px" }}
        >
          <h2>
            <b>Get To Know Us</b>
          </h2>
          <br />
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            Careers
          </a>
          <br />
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            Blog
          </a>
          <br />
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            About MentorMe
          </a>
          <br />
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            Chat Algo
          </a>
          <br />
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            {" "}
            Mentorship
          </a>
          <br />
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            Our services
          </a>
          <br />
        </div>
        <div
          className="make"
          style={{ position: "relative", top: "0px", left: "170px" }}
        >
          <h2>
            <b>Let Us Help You</b>
          </h2>
          <br />
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            Become a Mentee
          </a>
          <br />
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            Get personalised mentorship
          </a>
          <br />
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            24x7 support
          </a>
          <br />
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            Learn skills
          </a>
          <br />
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            MentorMe assistant
          </a>
          <br />
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            Two-way interaction
          </a>
          <br />
          <a style={{ textDecoration: "none", color: "white" }} href="#">
            Help
          </a>
          <br />
        </div>

        <img
          src="data:image/png;base64,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"
          alt="..."
          style={{
            height: "100px",
            width: "200px",
            position: "relative",
            top: "20px",
            left: "350px",
          }}
        />
        <p style={{ position: "relative", top: "150px", left: "100px" }}>
          Email us on: mentorme.info@gmail.com
        </p>
        <p style={{ position: "relative", top: "200px", right: "150px" }}>
          Contact us on: 0661384759
        </p>
      </div>
      {/* <p style={{marginBottom:'40px'}}>Made with ❤︎ by Nishtha Kathpal</p> */}
    </div>
  );
};

export default Footer;
