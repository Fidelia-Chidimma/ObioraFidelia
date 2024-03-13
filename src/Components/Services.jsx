import React from "react";
import Card1 from "./Card1";
import Service from "../assets/Images/Service.png"

function Services() {
  return (
    <>
      <div className="bg-cover">
        <div className="text-center text-light">
          <h1 className="pt-5">Services</h1>
          <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i> Services</p>
        </div>
      </div>

      <div className="container mt-3">
        <Card1/>
        <div className="row">
          <div className="col-md-6" data-aos="fade-up">
            <img src={Service} alt="" className="img-fluid"/>
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <h2>THE COMPLETE SOLUTION</h2>
            <div className="bg-red"></div>
            <p className="mt-3">Crystal Shipment is renowned for our top-notch Warehousing services which are safe, affordable, and reliable. We take pride in delivering the best services that outcompete our rivals. We assure you of getting adequate value for your money. We always ensure that our customers are delighted.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
