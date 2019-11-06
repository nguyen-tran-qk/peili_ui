import React from "react";
import "./organizations-detail.styles.scss";
import organImage from "../../../assets/images/organ.jpg";

import { withRouter } from "react-router-dom";
import { PeiliConsumer } from "../../../context/context";

import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const OrganizationsDetailPage = (props: any) => {
  return (
    <PeiliConsumer>
      {(value: any) => {
        const { organizationsData } = value;
        let id = props.match.params.id;
        id = parseInt(id);
        const organizationFiltered = organizationsData.find(
          (item: any) => item.id === id
        );
        //console.log(organizationFiltered);
        return (
          <div className="organizations-detail">
            <div className="organizations-detail-img-header-container">
              <img src={organImage} alt="organization" />
            </div>
            <div className="organizations-detail-header">
              <img
                src={organizationFiltered.logo}
                alt="logo"
                className="organizations-detail-logo"
              />
              <h2>{organizationFiltered.name}</h2>
              <p>
                <FaMapMarkerAlt /> {organizationFiltered.address}
              </p>
              <p>
                <FaClock /> {organizationFiltered.time}
              </p>
            </div>
            <div className="organizations-detail-events">
              <h3>Next events</h3>
            </div>
            <p className="organizations-detail-description">
              {organizationFiltered.description}
            </p>
          </div>
        );
      }}
    </PeiliConsumer>
  );
};

export default withRouter(OrganizationsDetailPage);
