import React from 'react';
import "../Styles/Sass_Files/main.scss";

export default function Header() {

    return (
        <div>
            <header className="head">
            <ul className="list">
              <li className="category">Cricket</li>
              <li className="category">Football</li>
              <li className="category">Hockey</li>
              <li className="category">Basketball</li>
              <li className="category">Other</li>
              <button className="btn">Get Started</button>
              <svg className="w-6 h-6 menu" id="menu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </ul>
          </header>
        </div>
    )
}


