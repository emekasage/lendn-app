import React from "react";
import "./dashboard.css";
import { cardData } from "../../../card-info";
import { smallCardData } from "../../../card-info";
import Chart from "../../../chart/Chart";

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
      <div className="row pt-3 pb-5 px-4">
        <div className="col-12 col-lg-7 mb-4 mb-lg-0">
          <div className="card">
            <div className="card-body">
              <div className="cardTop d-flex justify-content-between align-items-center mb-3 px-2">
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
              <Chart />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 mb-lg-0">
          <div className="loanRatioSection py-4 px-5">
            <div className="text-white fw-bold loanRatioText1">Loan Ratio</div>
            <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
              <div className="position-relative">
                <div className="bgPie position-relative">
                  <span className="position-absolute pie-percentage fw-bold">
                    86%
                  </span>
                </div>
                <div className="smPie position-absolute">
                  <div className="position-relative">
                    <span className="text-white position-absolute pie-percentage-sm fw-bold">
                      14%
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center">
                  <div className="bg-white border border-white active-square rounded"></div>
                  <div className="text-white active-text ms-3">Active</div>
                </div>
                <div className="d-flex flex-row align-items-center mt-3">
                  <div className="inactive-square rounded"></div>
                  <div className="text-white active-text ms-3">Inactive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row bottomCards">
        {smallCardData.map((smallCardInfo, index) => {
          return (
            <div
              className="col-12 col-md-6 col-lg-3-5 mb-4 mb-lg-0"
              key={index}
            >
              <div className="card card-space">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div
                    className="backCircle d-flex justify-content-center align-items-center"
                    style={{
                      backgroundImage: `url(${smallCardInfo.backImage})`,
                    }}
                  >
                    <img src={smallCardInfo.cardIcon} alt="work-image" />
                  </div>
                  <div className="d-flex flex-column align-content-between">
                    <span className="smallCardTitle fw-bolder">
                      {smallCardInfo.cardTitle}
                    </span>
                    <span className="smallCardText fw-normal">
                      {smallCardInfo.cardText}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-12 col-md-12 col-lg-5-5 mb-0 mb-lg-0">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fw-bold smallCardTitle2">
                  Top performing Loan
                </div>

                <img
                  src="assets/menu.svg"
                  alt="menu-icon"
                  className="menu-icon"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src="assets/sneaker.svg"
                    style={{ width: "92px", height: "92px" }}
                  />
                  <div className="d-flex flex-column ms-3">
                    <div className="fw-normal smallcardText2">
                      Venty Asset Loan
                    </div>
                    <img
                      src="assets/rating.svg"
                      alt="rating"
                      style={{ width: "78px", height: "13px" }}
                    />
                  </div>
                </div>
                <div className="fw-bold smallcardText2">N870,00.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
