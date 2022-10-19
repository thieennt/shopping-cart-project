import React from "react";
import LogoIcon from "../../icons/Logo";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoPinterest,
} from "react-icons/io5";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-left">
          <div className="footer-info">
            <div className="footer-logo">
              <LogoIcon />
              <span>Comforty</span>
            </div>
            <p>
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus{" "}
            </p>
            <div className="footer-socials">
              {socials?.length > 0 &&
                socials?.map((item, index) => {
                  return (
                    <div className="social-item" key={index}>
                      <span>{item.icon}</span>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="footer-category">
            <p>CATEGORY</p>
            {listCategory.map((item, index) => {
              return (
                <ul>
                  <li>{item.name}</li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-support">
            <p>SUPPORT</p>
            {listCategory.map((item, index) => {
              return (
                <ul>
                  <li>{item.name}</li>
                </ul>
              );
            })}
          </div>
          <div className="footer-newletter">
            <p>NEWSLETTER</p>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Your email"
                className="input"
              ></input>
              <button type="submit" className="btn">
                Subcribe
              </button>
            </div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const socials = [
  { id: 1, name: "Facebook", icon: <IoLogoFacebook /> },
  { id: 2, name: "Twitter", icon: <IoLogoTwitter /> },
  { id: 3, name: "Instagram", icon: <AiFillInstagram /> },
  { id: 4, name: "Pinterest", icon: <IoLogoPinterest /> },
  { id: 5, name: "Youtube", icon: <AiFillYoutube /> },
];

const listCategory = [
  { id: 1, name: "Sofa" },
  { id: 2, name: "Armchair" },
  { id: 3, name: "Wing Chair" },
  { id: 4, name: "Desk Chair" },
  { id: 5, name: "wooden Chair" },
  { id: 6, name: "Park Bench" },
];
