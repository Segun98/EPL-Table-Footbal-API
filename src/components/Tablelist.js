import React from "react";

function Tablelist({
  position,
  teamName,
  played,
  won,
  drew,
  lost,
  goals,
  against,
  GD,
  points,
  description,
  form
}) {
  return (
    <div>
      <div className="english-table-wrap">
        <div
          className={
            description === "Promotion - Champions League (Group Stage)"
              ? "position blue"
              : "position"
          }
          title={description}
        >
          {" "}
          {position}
        </div>
        <div className="teamName" title={description}>
          {teamName}
        </div>
        <div className="played">{played}</div>
        <div className="won">{won}</div>
        <div className="drew">{drew}</div>
        <div className="lost">{lost}</div>
        <div className="goalsfor">{goals}</div>
        <div className="against">{against}</div>
        <div className="GD">{GD}</div>
        <div className="pts">{points}</div>
        <div className="form">{form}</div>
      </div>
    </div>
  );
}

export default Tablelist;
