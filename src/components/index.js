import React, { useState, useEffect } from "react";
import Tablelist from "./Tablelist";

function Index() {
  
  useEffect(() => {
    EPLTable();
  }, []);
  async function EPLTable() {
    const res = await fetch(
      "hidden"
    );
    const data = await res.json();
    setTable(data);
    //console.log(data);
  }
  
  const [Table, setTable] = useState([]);

  return (
    <div className="index">
      <div className="index-head">
        <h3>English Premier League Table 2019/2020</h3>
      </div>
      <div className="english-table-head">
        <div className="position" title="Position">
          Pos
        </div>
        <div className="teamName">Team Name</div>
        <div className="played" title="Games Played">
          P
        </div>
        <div className="won" title="Games Won">
          W
        </div>
        <div className="drew" title="Draw">
          D
        </div>
        <div className="lost" title="Games Lost">
          L
        </div>
        <div className="goalsfor" title="Goals For">
          GF
        </div>
        <div className="against" title="Goals Against">
          GA
        </div>
        <div className="GD" title="Goals Difference">
          GD
        </div>
        <div className="pts" title="Points">
          P
        </div>
        <div className="form">Last 5</div>
      </div>
      <div>
        {Table.map((epl, index) => (
          <Tablelist
            key={index}
            position={epl.position}
            teamName={epl.team_name}
            played={epl.overall_gp}
            won={epl.overall_w}
            drew={epl.overall_d}
            lost={epl.overall_l}
            goals={epl.overall_gs}
            against={epl.overall_ga}
            GD={epl.gd}
            points={epl.points}
            description={epl.description}
            form={epl.recent_form}
          />
        ))}
      </div>
    </div>
  );
}

export default Index;
