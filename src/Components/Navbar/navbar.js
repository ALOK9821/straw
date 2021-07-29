import React from "react";
import "../../Styles/Sass_Files/main.scss";
import { Link } from "react-router-dom";

export default function Header() {
  let cnt = 0;

  function menus() {
    cnt++;
    console.log("hello vishal");
    if (cnt > 1) {
      if (cnt % 2 === 1 && window.innerWidth <= 1000) {
        document.getElementById("list1").style.display = "block";
      } else {
        document.getElementById("list1").style.display = "none";
      }
    }
  }

  return (
    <div>
      <header className="head" id="head">
        <ul className="list" id="list">
          <li className="category" id="cricket">
            <Link to="/">Cricket</Link>
          </li>
          <li className="category" id="football">
            <Link to="/">Football</Link>
          </li>
          <li className="category" id="hockey">
            <Link to="/">Hockey</Link>
          </li>
          <li className="category" id="basketball">
            <Link to="/">Basketball</Link>
          </li>
          <li className="category" id="other">
            <Link to="/">Other</Link>
          </li>
          <button className="btn">Get Started</button>
          <svg
            className="w-6 h-6 menu"
            id="menu"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
              onClick={() => {
                menus();
              }}
            />
          </svg>
        </ul>
        <ul className="list1" id="list1">
          <li className="category1">
            <Link to="/">Cricket</Link>
          </li>
          <hr />
          <li className="category1">
            <Link to="/">Football</Link>
          </li>
          <hr />
          <li className="category1">
            <Link to="/">Hockey</Link>
          </li>
          <hr />
          <li className="category1">
            <Link to="/">Basketball</Link>
          </li>
          <hr />
          <li className="category1">
            <Link to="/">Other</Link>
          </li>
          <hr />
          <div className="getstart">
            <button className="btn1">Get Started</button>
          </div>
          <hr />
        </ul>
      </header>
    </div>
  );
}
