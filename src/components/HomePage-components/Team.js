import React from "react";
import Card from "../../Shared/UIElements/Card";
import Avatar from "../../Shared/UIElements/Avatar";
import teamData from "../../data/Team-data.json";
import "./Team.css";

export default function Team() {
  return (
    <div id="team" className="team">
      <h1>Our Team</h1>
      <div className="team-container">
        {teamData.map((team, index) => {
          return (
            <Card className="team-card" key={index}>
              <div className="team-image">
                <Avatar image={team.ImgUrl} alt={team.name} />
              </div>
              <h2>{team.name}</h2>
              <h4>{team.role}</h4>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
