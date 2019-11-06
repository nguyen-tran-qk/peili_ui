import React from "react";
import "./organizations.styles.scss";

import Hero from "../../components/hero/hero.component";
import OrganizationCard from "../../components/organization-card/organization-card.component";

import organizationHeroImage from "../../assets/images/organ.jpg";

import { PeiliConsumer } from "../../context/context";

const OrganizationPage = () => {
  return (
    <PeiliConsumer>
      {(value: any) => {
        const { organizationsData } = value;
        console.log(organizationsData);
        return (
          <>
            <Hero image={organizationHeroImage} title="organizations" />
            <div className="organization">
              {organizationsData.map((item: any) => {
                return <OrganizationCard key={item.id} organization={item} />;
              })}
            </div>
          </>
        );
      }}
    </PeiliConsumer>
  );
};

export default OrganizationPage;
