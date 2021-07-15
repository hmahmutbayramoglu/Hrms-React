import React from 'react'
import './CandidateFilter.css';

export default function CandidateFilter() {
    return (
        <div>
            <div id="candidate-filters">
     
                <h4>Uzmanlıklar</h4> 
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
        <br/>
                
            </div>
        </div>
    );
}
