import React from "react";
import "./fundstransfer.css";

const FundsTransfer = () => {
  return (
    <div className="fundstransfer">
      <div className="row p-4">
        <div className="col-12">
          <div className="bg-white rounded border border-white py-4 px-5">
            <div className="card-body">
              <span className="fw-bold bgText">Funds Transfer</span>
              <div className="my-4 mx-auto profileImage p-4">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundsTransfer;