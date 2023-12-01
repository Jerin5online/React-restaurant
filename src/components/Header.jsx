import { Link } from "@mui/material";
import React from "react";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary  " data-bs-theme="dark">
        <div class="container-fluid">
          <Link to={"/"}style={{textDecoration: "none",color: "red",marginLeft: "40px",fontSize:"30px"}}
          >
           <i class="fa-solid fa-utensils text-white"></i> AUTHE<span className="text-white">NTIC</span>
          </Link>{" "}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarColor01">
            <ul class="navbar-nav align-items ms-auto">
              <li class="nav-item ">
                <a class="nav-link active" href="#">
                  HOME
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  ABOUT US
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  MENU
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  RESERVATIONS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
