import React from "react";
import "./organization-card.styles.scss";

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const OrganizationCard = (props: any) => {
  const { organization } = props;
  return (
    <div className="organization-card">
      <div className="card-img-container">
        <img src={organization.logo} alt="nuorisoseurat" />
      </div>
      <div className="card-info">
        <h3 className="card-title">{organization.name}</h3>
        <p className="card-subtitle">{organization.subtitle}</p>
        <Link to={`/organizations/${organization.id}`} className="card-link">
          see more <FaArrowRight className="card-link-icon" />
        </Link>
      </div>
    </div>
  );
};

export default OrganizationCard;
