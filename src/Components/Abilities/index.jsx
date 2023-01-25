import React from "react";
import { formatStatName } from "../../Funtion/Index";
import { ProgressBar, ProgressBarFill, StatsList } from "../Cards/style";
import "../Cards/cards.style.css";
const Abilities = ({ data }) => {
  return (
    <>
      <div className="text-center d-flex justify-content-between aling-item-center">
        <p className="pokemon-number mb-0 me-4 ">Abilities:</p>
        {data &&
          data.abilities?.map((item, index) => (
            <ul key={index}>
              <li className={"mt-1 text-white pokemon-number abilities"}>
                {item.ability.name}
              </li>
            </ul>
          ))}
      </div>
      {data.stats?.map(({ stat, base_stat }) => (
        <StatsList>
          <li>
            <span className="text-white me-2">{formatStatName(stat.name)}</span>
            <span className="text-white">{base_stat}</span>
            <ProgressBar>
              <ProgressBarFill base_stat={base_stat}></ProgressBarFill>
            </ProgressBar>
          </li>
        </StatsList>
      ))}
    </>
  );
};

export default Abilities;
