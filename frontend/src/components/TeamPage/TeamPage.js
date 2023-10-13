import React, { useState } from "react";
import TeamCard from "./TeamCard";
import TeamCardAL from "./TeamCardAL";
import TeamCardSM from "./TeamCardSM";
import TeamPageHeading from "./TeamPageHeading";
import members from "./MembersStatic";
import advisors from "./AdvisorsStatic";
import alumni from "./AlumniStatic";
import Header from "./Header";
import Fade from "react-reveal/Fade";
import Particless from '../Common/Particles/Particless';
import "./TeamPage.css";

const TeamPage = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);

  const toggleShowAllMembers = () => {
    setShowAllMembers(!showAllMembers);
  };

  // const displayedMembers = showAllMembers ? members : members.slice(0, 3);
  const displayedAlumni = showAllMembers ? alumni : alumni.slice(0, 3);

  return (
    <>
      <Header />
      <Fade left>
        <TeamPageHeading text="Heads" />
      </Fade>
      <div className="members-head-list">
        {members?.map((member) => {
          return <TeamCard key={member.id} member={member} />;
        })}
      </div>
      {/* {members.length > 3 && (
        <button onClick={toggleShowAllMembers}>
          {showAllMembers ? "Show Less" : "Show More"}
        </button>
      )} */}

      <Fade left>
        <TeamPageHeading text="Advisors" />
      </Fade>
      <div className="members-head-list">
        {advisors?.map((member) => {
          return <TeamCardSM key={member.id} member={member} />;
        })}
      </div>

      <br /><br /><br /><br /><br /><br /><br />

      <Fade left>
        <TeamPageHeading text="Alumni" />
      </Fade>
      <div className="members-head-list">
        {displayedAlumni?.map((member) => {
          return <TeamCardAL key={member.id} member={member} />;
        })}
      </div>
      {members.length > 3 && (
        <button 
        className="show-more-button" onClick={toggleShowAllMembers}>
          {showAllMembers ? "Show Less" : "Show More"}
        </button>
      )}
      <Particless />
    </>
  );
};

export default TeamPage;
