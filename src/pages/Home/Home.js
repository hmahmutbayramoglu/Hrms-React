import React from "react";
import {  } from "react-bootstrap";
import "../../assets/js/home-design";
import {
  BiBuildings,
  BiUser,
  BiPaperPlane,
  BiMessageRoundedCheck,
  BiChevronRight,
  BiVector,
  BiCode,
  BiCommentDetail,
  BiCubeAlt,
  BiGroup
} from "react-icons/bi";

import "./Home.css";


export default function Home() {
  return (
    <div>

 

      <section className="home">
        <div className="bg-img"></div>
        <div className="home-content">
          <div className="home-text">
            <h1>Human Resources Management Systems</h1>
            <p> Sektörü Yakınlaştıran Platform</p>
          </div>
          <div className="home-buttons">
            <div className="blue-btn">İş İlanlarına Göz At</div>
            <div className="blue-btn-border">İş ilanı Ver</div>
          </div>
        </div>
      </section>

      <section className="purpose">
        <div className="services-box col-md-12">
          <div className="col-3 item">
            <BiBuildings className="item-icon" />
            <h4>Şirketler</h4>
            <p>İş verenlerle görüş </p>
          </div>
          <div className="col-3 item">
            <BiUser className="item-icon" />
            <h4>Geliştiriciler</h4>
            <p>Aradığın yazılımcıyı bul </p>
          </div>

          <div className="col-3 item">
            <BiPaperPlane className="item-icon" />
            <h4>iş Bulundu</h4>
            <p>En kısa sürede iş sahibi ol </p>
          </div>
          <div className="col-3 item">
            <BiMessageRoundedCheck className="item-icon" />
            <h4>Yorumlar</h4>
            <p>İlan Yorumlarına bak</p>
          </div>
        </div>

        <section id="about">
          <div className="col-md-5 img-box">
            <div className="about-img"></div>
          </div>
          <div className="col-md-5 content">
            <h2 className="about-header">Lorem ipsum </h2>
            <p className="about-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </section>
      </section>
      <section id="about-product">
        <div className="container">
          <div className="col-md-4 about-item">
            <div className="header">
              <h2>
                Veniam irure do adipisicing laboris commodo qui. <br />
                Innovation
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s but also the leap into electronic
                typesetting, when it to make a type specimen book. It has
                survived.
              </p>
            </div>
            <div className="about-btn-2">Detaylar</div>
          </div>
          <div className="col-md-3 about-item">
            <div className="header">
              <div className="about-img-1"></div>
            </div>
            <div className="body">
              <h5>Get Started</h5>{" "}
              <p>
                {" "}
                make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
            <div className="about-btn">
              {" "}
              <BiChevronRight className="about-btn-i" />
            </div> 
          </div>
          <div className="col-md-3 about-item">
            <div className="header">
              <div className="about-img-2"></div>
            </div>
            <div className="body">
              <h5>Get Started</h5>{" "}
              <p>
                {" "}
                make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
            <div className="about-btn">
              {" "}
              <BiChevronRight className="about-btn-i" />
            </div>
          </div>
        </div>
      </section>

      <section id="service">
        <div className="container">

          <div className="col-md-4 service-box-header">  <div className="content"><h2>Est officia officia labore sunt in fugiat est et quis aute deserunt ex.</h2></div></div>
          <div className="col-md-4 service-box"><BiCommentDetail className="service-i"/>  <div className="content"><h5>Lorem ipsum</h5> <p>Ad nisi fugiat nostrud adipisicing voluptate dolore magna dolor consectetur proident sint irure dolor nostrud proident cupidatat cupidatat reprehenderit.</p></div></div>
          <div className="col-md-4 service-box"><BiCode className="service-i"/>  <div className="content"><h5>Lorem ipsum</h5> <p>Ad nisi fugiat nostrud adipisicing voluptate dolore magna dolor consectetur proident sint irure dolor nostrud proident cupidatat cupidatat reprehenderit.</p></div></div>

          <div className="col-md-4 service-box"><BiCubeAlt className="service-i"/>  <div className="content"><h5>Lorem ipsum</h5> <p>Ad nisi fugiat nostrud adipisicing voluptate dolore magna dolor consectetur proident sint irure dolor nostrud proident cupidatat cupidatat reprehenderit.</p></div></div>
          <div className="col-md-4 service-box"><BiGroup className="service-i"/>  <div className="content"><h5>Lorem ipsum</h5> <p>Ad nisi fugiat nostrud adipisicing voluptate dolore magna dolor consectetur proident sint irure dolor nostrud proident cupidatat cupidatat reprehenderit.</p></div></div>
          <div className="col-md-4 service-box"><BiVector className="service-i"/>  <div className="content"><h5>Lorem ipsum</h5> <p>Ad nisi fugiat nostrud adipisicing voluptate dolore magna dolor consectetur proident sint irure dolor nostrud proident cupidatat cupidatat reprehenderit.</p></div></div>
          
        </div>

        <div className="service-bg-img"></div>
      </section>

      <section id="system-users">
        <div className="content">
         <div className="row">
         <div className="col-md-6"><h3>32</h3><p>Officia non  <br/> veniam </p></div>
          <div className="col-md-6"><h3>2406</h3><p>Officia   <br/> veniam </p></div>
         </div>

         <div className="row">
         <div className="col-md-6"><h3>120</h3><p>Officia  non  <br/> veniam </p></div>
          <div className="col-md-6"><h3>100%</h3><p>Officia    <br/> veniam </p></div>
         </div>
        </div> 
        <div className="system-bg">
        <div className="system-users-bg-img"></div></div>
      </section>
    </div>
  );
}
