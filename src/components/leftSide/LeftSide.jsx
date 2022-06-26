import React from "react";
import {
  explore,
  home,
  messages,
  more,
  notifications,
  profil,
  twitter,
  tweet,
} from "./icons";
import { NavLink } from "react-router-dom";
import "./leftside.scss";

const LeftSide = () => {
  return (
    <div className="left-side">
      <div className="container">
        <header>{twitter}</header>
        <nav>
          <NavLink to="/">{home}</NavLink>
          <NavLink to="/explore">{explore}</NavLink>
          <NavLink to="/notifications">{notifications}</NavLink>
          <NavLink to="/messages">{messages}</NavLink>
          <NavLink to="/profil">{profil}</NavLink>
          <button className="more">{more}</button>
        </nav>
        <button className="tweet">{tweet}</button>
        <footer>
          <button>
            <div className="photo">
              <img
                alt="salome"
                src="https://pbs.twimg.com/profile_images/1535026083069939719/B64mVQ2V_x96.jpg"
              />
            </div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default LeftSide;
