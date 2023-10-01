import React from "react";
import iit_logo from "../image/iit_logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div
        className="container_1 bg-secondary"
        style={{
          width: "100%",
          height: "70px",
        }}
      >
        <span
          className="right me-2 mt-1"
          style={{ alignContent: "center", float: "right" }}
        >
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Indian_Institute_of_Technology_Bhubaneswar_Logo.svg/800px-Indian_Institute_of_Technology_Bhubaneswar_Logo.svg.png"
            width="60"
            height="58"
            alt=""
          />
        </span>

        <span
          className="left ms-2 mt-3"
          style={{ justifyContent: "center", float: "left" }}
        >
          {" "}
          <a className="nav-link" href="#">
            <h2
              className="text-white"
              style={{ fontFamily: "Times New Roman" }}
            >
              {" "}
              Remote Sensing Team
            </h2>
          </a>
        </span>
      </div>
    </>
  );
}
