import React from "react";


import CandidateBanner from '../../Components/CandidateBanner/CandidateBanner'

import TopBanner from "../../Components/TopBanner/TopBanner";

import CandidateFilter from '../../Components/CandidateFilter/CandidateFilter'


import './Candidate.css';



export default function Candidate() {
  return (
    <div>
      
      <TopBanner />

    <section id="candidates">
    <CandidateFilter id="candidate-filters" />    
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <div id="candidate-card">

                    <div className="col-md-3">
                        <div className="img-box"></div>
                    </div>
                    <div className="col-md-9">
                        <div id="candidate-content">
                        <h2>Full Stack Developer</h2>
                        <span id="candidate-city">İstanbul Avrupa</span>
                        <p id="candidate-explanation">2018’dan beri kurumsal mimaride yazılımlar, Arduino robotik kodlama ve veri tabanı tasarımları yapıyorum kısaca teknolojiyi seviyorum ve teknoloji yakından takip ediyorum.</p>
                      </div>
                    </div>
                </div>
              </tr>
                <tr>
                <div id="candidate-card">
         
                    <div className="col-md-3">
                        <div className="img-box"></div>
                    </div>
                    <div className="col-md-9">
                        <div id="candidate-content">
                        <h2>Backend Developer</h2>
                        <span id="candidate-city">Ankara</span>
                        <p id="candidate-explanation">2018’dan beri kurumsal mimaride yazılımlar, Arduino robotik kodlama ve veri tabanı tasarımları yapıyorum kısaca teknolojiyi seviyorum ve teknoloji yakından takip ediyorum.</p>
                      </div>
                    </div>
                </div>
              </tr>
 
          

            </tbody>
          </table>
        </div>
        
      </section>
      <CandidateBanner/>
    </div>
  );
}
