import React, { useRef } from "react";
import "./fundstransfer.css";

const FundsTransfer = () => {
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    console.log(file.name);
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    console.log(file.name);
  };
  return (
    <div className="fundstransfer">
      <div className="row p-4">
        <div className="col-12">
          <div className="bg-white rounded border border-white pt-5 px-5 pb-0">
            <div className="card-body">
              <span className="fw-bold mb-4 bgText">Funds Transfer</span>
              <div className="my-4 mx-auto profileImage d-flex justify-content-center align-items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={imageUploader}
                  style={{ display: "none" }}
                />
                <img
                  src="../../assets/camera.svg"
                  ref={uploadedImage}
                  alt="upload-icon"
                  style={{
                    background: "",
                    width: "37px",
                    height: "33px",
                    margin: "0 auto",
                  }}
                  onClick={() => imageUploader.current.click()}
                />
              </div>
              <form className="py-4">
                <div className="row d-flex mb-5 ms-4">
                  <div className="col formOption">
                    <label className="transferLabel">Select Account</label>
                    <select id="inputState" className="transferField select">
                      <option selected>Select Account</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col">
                    <label className="transferLabel">Amount</label>
                    <input
                      type="text"
                      className="transferField"
                      placeholder="0.00"
                      aria-label="0.00"
                    />
                    <img
                      src="../../assets/calendar.svg"
                      alt="calendar-icon"
                      className="calendarImg position-absolute"
                    />
                  </div>
                </div>
                <div className="row d-flex mb-5 ms-4">
                  <div className="col">
                    <label className="transferLabel">Account Number</label>
                    <input
                      type="text"
                      className="transferField"
                      placeholder="Enter Account Number"
                      aria-label="0.00"
                    />
                    <img
                      src="../../assets/calendar.svg"
                      alt="calendar-icon"
                      className="calendarImg position-absolute"
                    />
                  </div>
                  <div className="col formOption">
                    <label className="transferLabel">Select Bank</label>
                    <select id="inputState" className="transferField select">
                      <option selected>Select Recipient Bank</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div className="row d-flex ms-4">
                  <div className="col">
                    <label className="transferLabel">Account Name</label>
                    <input
                      type="text"
                      className="transferField"
                      placeholder="Enter Account Name"
                      aria-label="0.00"
                    />
                    <img
                      src="../../assets/calendar.svg"
                      alt="calendar-icon"
                      className="calendarImg position-absolute"
                    />
                  </div>
                  <div className="col">
                    <label className="transferLabel">VAT</label>
                    <input
                      type="text"
                      className="transferField"
                      placeholder="Enter VAT"
                      aria-label="0.00"
                    />
                    <img
                      src="../../assets/calendar.svg"
                      alt="calendar-icon"
                      className="calendarImg position-absolute"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundsTransfer;
