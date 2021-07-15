import React from "react";

import "./JobPostingFilter.css";

export default function JobPostingFilter() {
  return (
    <div>
      <div id="filter">
        <h4>İş Alanı</h4> 
        <ul id="brand-filter">
          <li>
            <a href="/">Full Stack Developer</a>
            <span>(1)</span>
          </li>
          <li>
            <a href="/">Frontend Developer</a>
            <span>(4)</span>
          </li>
          <li>
            <a href="/">Backend Developer</a>
            <span>(2)</span>
          </li>
          <li>
            <a href="/">Database Specialist</a>
            <span>(7)</span>
          </li>
          <li>
            <a href="/">Web Developer</a>
            <span>(1)</span>
          </li>
          <li>
            <a href="/">.Net Developer</a>
            <span>(1)</span>
          </li>

          <li>
            <a href="/">Desinger</a>
            <span>(4)</span>
          </li>

          <li>
            <a href="/">Software Enginer</a>
            <span>(4)</span>
          </li>

          <li>
            <a href="/">Team Leader</a>
            <span>(4)</span>
          </li>




        </ul>
        <br />

 
        <h4>Şehir</h4>
        <div id="city-filter">
          <select className="form-select" aria-label="select example">
            <option selected disabled>
              Lütfen Şehir Seçiniz..
            </option>
            <option value="1">İstanbul/Hepsi</option>
            <option value="2">İstanbul/Avrupa</option>
            <option value="3">İstanbul/Anadolu</option>
            <option value="4">İzmir</option>
            <option value="5">Ankara</option>
            <option value="6">Antalya</option>
          </select>
        </div>

        <br />

        <h4>Maaş Skalası</h4>
        <div id="salary-filter">
          <input
            type="text"
            id="minSalary"
            className="form-control"
            placeholder="Min"
          />
          <input
            type="text"
            id="maxSalary"
            className="form-control"
            placeholder="Max"
          />

          <a href="/" className="btn btn-primary">
            Ara
          </a>
        </div>

        <br/>
        <h4>Şirketler</h4>
        <ul id="brand-filter">
          <li>
            <a href="/">Logo Yazılım </a>
            <span>(1)</span>
          </li>
          <li>
            <a href="/">Soft Yazılım </a>
            <span>(4)</span>
          </li>
          <li>
            <a href="/">Eurotech Bilişim </a>
            <span>(2)</span>
          </li>
          <li>
            <a href="/">Waps Software </a>
            <span>(7)</span>
          </li>
          <li>
            <a href="//">Logo Yazılım </a>
            <span>(1)</span>
          </li>
          <li>
            <a href="/">Logo Yazılım </a>
            <span>(1)</span>
          </li>

          <li>
            <a href="/">Soft Yazılım </a>
            <span>(4)</span>
          </li>
          <li>
            <a href="/">Eurotech Bilişim </a>
            <span>(2)</span>
          </li>
          <li>
            <a href="/">Waps Software </a>
            <span>(7)</span>
          </li>
          <li>
            <a href="/">Lisa Yazılım </a>
            <span>(5)</span>
          </li>
        </ul>
        <br />

        <a href="/" className="btn btn-primary search-button">
          Ara
        </a>
      </div>
    </div>
  );
}
