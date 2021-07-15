import React from "react";
import "./Footer.css";

import { FiChevronRight } from "react-icons/fi";

import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="col-md-4" id="footer-item">
            <div className="header">
              <div id="footer-about">
                <div id="footer-logo"></div>
                <div id="footer-content">
                  <h3>
                    WAPS <br />
                    SOFTWARE
                  </h3>
                </div>{" "}
              </div>
            </div>
            <div className="body">
              <p>
                Fugiat nulla incididunt ipsum mollit amet id nisi consectetur
                nulla elit nulla mollit nostrud. Id est nisi mollit commodo ad
                nulla duis occaecat minim et. Eu occaecat labore minim Lorem
                eiusmod.
              </p>
            </div>
            <div className="footer-social-media">
              <ul id="social-medias">
                <li>
                  <RiInstagramFill className="social-i" />
                </li>
                <li>
                  <RiFacebookBoxFill className="social-i" />
                </li>
                <li>
                  <RiLinkedinBoxFill className="social-i" />
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2" id="footer-item">
            <div className="header">
              <h4>Sayfalar</h4>
            </div>
            <div className="body">
              <ul id="pages">
                <li>
                  <a href="">
                    <FiChevronRight />
                    Ana Sayfa
                  </a>
                </li>
                <li>
                  <a href="">
                    <FiChevronRight />
                    İş Verenler
                  </a>
                </li>
                <li>
                  <a href="">
                    <FiChevronRight />
                    İş Arayanlar
                  </a>
                </li>
                <li>
                  <a href="">
                    <FiChevronRight />
                    İş İlanları
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2" id="footer-item">
            <div className="header">
              <h4>Topluluk</h4>
            </div>
            <div className="body">
              <ul id="pages">
                <li>
                  <a href="">Hakkımızda</a>
                </li>
                <li>
                  <a href="">Misyon & Vizyon</a>
                </li>
                <li>
                  <a href="">Sorun Bildir</a>
                </li>
                <li>
                  <a href="">Destek Ol</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2" id="footer-item">
		 	 <div className="header">
            	  <h4>Footer İtem</h4>
            </div>
			<div className="body">
            	  <p>In anim pariatur sint laborum minim. Adipisicing occaecat eiusmod consectetur dolor sunt sint pariatur excepteur irure ea esse ex ut non.</p>
            </div>
		  </div>

        </div>

		<div id="copyright">
		<p>2021 © <span>Waps Software</span> Tüm hakları Saklıdır. </p>
		</div>
      </footer>
    </div>
  );
}
