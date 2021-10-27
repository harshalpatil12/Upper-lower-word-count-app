import React from 'react'
export default function Navbar(props){
    return (
      <nav className="bg-dark">
      <ul className="nav">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/">{props.Active}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled">{props.Disabled}</a>
    </li>
  </ul>
  </nav>  
    );
  }