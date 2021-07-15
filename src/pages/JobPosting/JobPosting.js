import React from "react";
import TopBanner from "../../Components/TopBanner/TopBanner";

import "./JobPosting.css";

import JobPostingFilter from "../../Components/JobPostingFilter/JobPostingFilter";

export default function JobPosting() {
  return (
    <div>
      <TopBanner />
      <section id="job-postings">
        <JobPostingFilter id="filter" />
        <div className="container">
          <table className="table">
            <thead>
              <td>
                <th scope="col"></th>
              </td>
            </thead>
            <tbody>
              <tr>
                <div id="job-posting-card">
                  <div className="col-md-8">
                    <div id="employerName">
                      <h4>Eurotech Bilişim Teknolojileri A.Ş.</h4>{" "}
                      <svg
                        className="checkmark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                      >
                        <circle
                          className="checkmark__circle"
                          cx="26"
                          cy="26"
                          r="25"
                          fill="none"
                        />
                        <path
                          className="checkmark__check"
                          fill="none"
                          d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                      </svg>
                    </div>
                    <div id="job-posting-name">
                      <h5>Full Stack Developer Aranıyor</h5>
                    </div>
                    <div id="job-posting-city">
                      <p>İstanbul</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <span id="minSalary">4000$</span>
                    <span id="maxSalary">8000$</span>
                  </div>
                </div>
              </tr>
              <tr>
                <div id="job-posting-card">
                  <div className="col-md-8">
                    <div id="employerName">
                      <h4>Logo Yazılım</h4>
                      <svg
                        className="checkmark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                      >
                        <circle
                          className="checkmark__circle"
                          cx="26"
                          cy="26"
                          r="25"
                          fill="none"
                        />
                        <path
                          className="checkmark__check"
                          fill="none"
                          d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                      </svg>
                    </div>
                    <div id="job-posting-name">
                      <h5>Veri Tabanı Uzmanı Aranıyor</h5>
                    </div>
                    <div id="job-posting-city">
                      <p>İstanbul</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <span id="minSalary">7000$</span>
                    <span id="maxSalary">12000$</span>
                  </div>
                </div>
              </tr>
              <tr>
                <div id="job-posting-card">
                  <div className="col-md-8">
                    <div id="employerName">
                      <h4>Logo Yazılım</h4>
                      <svg
                        className="checkmark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                      >
                        <circle
                          className="checkmark__circle"
                          cx="26"
                          cy="26"
                          r="25"
                          fill="none"
                        />
                        <path
                          className="checkmark__check"
                          fill="none"
                          d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                      </svg>
                    </div>
                    <div id="job-posting-name">
                      <h5>Veri Tabanı Uzmanı Aranıyor</h5>
                    </div>
                    <div id="job-posting-city">
                      <p>İstanbul</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <span id="minSalary">7000$</span>
                    <span id="maxSalary">12000$</span>
                  </div>
                </div>
              </tr>
              <tr>
                <div id="job-posting-card">
                  <div className="col-md-8">
                    <div id="employerName">
                      <h4>Logo Yazılım</h4>
                      <svg
                        className="checkmark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                      >
                        <circle
                          className="checkmark__circle"
                          cx="26"
                          cy="26"
                          r="25"
                          fill="none"
                        />
                        <path
                          className="checkmark__check"
                          fill="none"
                          d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                      </svg>
                    </div>
                    <div id="job-posting-name">
                      <h5>Veri Tabanı Uzmanı Aranıyor</h5>
                    </div>
                    <div id="job-posting-city">
                      <p>İstanbul</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <span id="minSalary">7000$</span>
                    <span id="maxSalary">12000$</span>
                  </div>
                </div>
              </tr>
              <tr>
                <div id="job-posting-card">
                  <div className="col-md-8">
                    <div id="employerName">
                      <h4>Logo Yazılım</h4>
                      <svg
                        className="checkmark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                      >
                        <circle
                          className="checkmark__circle"
                          cx="26"
                          cy="26"
                          r="25"
                          fill="none"
                        />
                        <path
                          className="checkmark__check"
                          fill="none"
                          d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                      </svg>
                    </div>
                    <div id="job-posting-name">
                      <h5>Veri Tabanı Uzmanı Aranıyor</h5>
                    </div>
                    <div id="job-posting-city">
                      <p>İstanbul</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <span id="minSalary">7000$</span>
                    <span id="maxSalary">12000$</span>
                  </div>
                </div>
              </tr>
              <tr>
                <div id="job-posting-card">
                  <div className="col-md-8">
                    <div id="employerName">
                      <h4>Logo Yazılım</h4>
                      <svg
                        className="checkmark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                      >
                        <circle
                          className="checkmark__circle"
                          cx="26"
                          cy="26"
                          r="25"
                          fill="none"
                        />
                        <path
                          className="checkmark__check"
                          fill="none"
                          d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                      </svg>
                    </div>
                    <div id="job-posting-name">
                      <h5>Veri Tabanı Uzmanı Aranıyor</h5>
                    </div>
                    <div id="job-posting-city">
                      <p>İstanbul</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <span id="minSalary">7000$</span>
                    <span id="maxSalary">12000$</span>
                  </div>
                </div>
              </tr>
              <tr>
                <div id="job-posting-card">
                  <div className="col-md-8">
                    <div id="employerName">
                      <h4>Logo Yazılım</h4>
                      <svg
                        className="checkmark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                      >
                        <circle
                          className="checkmark__circle"
                          cx="26"
                          cy="26"
                          r="25"
                          fill="none"
                        />
                        <path
                          className="checkmark__check"
                          fill="none"
                          d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                      </svg>
                    </div>
                    <div id="job-posting-name">
                      <h5>Veri Tabanı Uzmanı Aranıyor</h5>
                    </div>
                    <div id="job-posting-city">
                      <p>İstanbul</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <span id="minSalary">7000$</span>
                    <span id="maxSalary">12000$</span>
                  </div>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
