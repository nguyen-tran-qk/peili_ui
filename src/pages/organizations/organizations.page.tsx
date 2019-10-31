import React from "react";
import "./organizations.styles.scss";

import { Link } from "react-router-dom";

import Hero from "../../components/hero/hero.component";
import organizationHeroImage from "../../assets/images/organ.jpg";

import { FaArrowRight } from "react-icons/fa";

import nuorisoseuratImage from "../../assets/images/logo-nuori.png";
import vamosImage from "../../assets/images/logo-vamos.png";

const OrganizationPage = () => {
  return (
    <>
      <Hero image={organizationHeroImage} title="organizations" />
      <div className="organization">
        {/* begin single card */}
        <div className="organization-card">
          <div className="card-img-container">
            <img src={nuorisoseuratImage} alt="nuorisoseurat" />
          </div>
          <div className="card-info">
            <h3 className="card-title">Nuorisoseurat</h3>
            <p className="card-subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos quam vero eius libero laboriosam sunt minima, amet
              eligendi aliquid harum!
            </p>
            <Link to="/organizations" className="card-link">
              see more <FaArrowRight className="card-link-icon" />
            </Link>
          </div>
        </div>
        {/* end of single card */}

        {/* begin single card */}
        <div className="organization-card">
          <div className="card-img-container">
            <img src={vamosImage} alt="vamos" />
          </div>
          <div className="card-info">
            <h3 className="card-title">Vamos</h3>
            <p className="card-subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos quam vero eius libero laboriosam sunt minima, amet
              eligendi aliquid harum!
            </p>
            <Link to="/organizations" className="card-link">
              see more <FaArrowRight className="card-link-icon" />
            </Link>
          </div>
        </div>
        {/* end of single card */}

        {/* begin single card */}
        <div className="organization-card">
          <div className="card-img-container">
            <img src={nuorisoseuratImage} alt="nuorisoseurat" />
          </div>
          <div className="card-info">
            <h3 className="card-title">R3</h3>
            <p className="card-subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos quam vero eius libero laboriosam sunt minima, amet
              eligendi aliquid harum!
            </p>
            <Link to="/organizations" className="card-link">
              see more <FaArrowRight className="card-link-icon" />
            </Link>
          </div>
        </div>
        {/* end of single card */}
      </div>
    </>
  );
};

export default OrganizationPage;
