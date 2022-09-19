import React from "react";
import "./pages.css";
import { cardData } from "../../card-info";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="row p-4">
        {cardData.map((cardInfo, index) => {
          return (
            <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0" key={index}>
              <div className="card px-1">
                <div className="card-body d-flex flex-column align-content-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="cardTitle fw-bold mt-1">
                      {cardInfo.title}
                    </div>
                    <img src={cardInfo.icon} alt="card-icon" className="me-2" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <h5 className="card-amount fw-normal">{cardInfo.amount}</h5>
                    <div className="d-flex flex-row align-items-center">
                      <div className="card-percent me-2">
                        {cardInfo.percentage}
                      </div>
                      <img src={cardInfo.arrow} alt="arrow" className="mb-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row pt-2 pb-5 px-4">
        <div className="col-12 col-lg-7 mb-4 mb-lg-0">
          <div className="card">
            <div className="card-body">
              <div className="cardTop d-flex justify-content-between align-items-center">
                <div className="cardTitle fw-bold">Disbursement chart</div>
                <div className="timeline">
                  <span>January 2021 - December 2021</span>
                  <img
                    src="assets/caret-down.svg"
                    alt="caret-down"
                    className="ms-1 mb-1"
                    style={{ width: "7px", height: "4px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 mb-lg-0"></div>
      </div>
    </div>
  );
};

export default Dashboard;
