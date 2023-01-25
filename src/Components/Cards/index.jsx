import React from "react";
import { GetImageById } from "../../Funtion/Index";
import { motion } from "framer-motion";
import "./cards.style.css";
import { ProgressBar, ProgressBarFill, StatsList } from "./style";
const Cards = ({ data }) => {
  const formatStatName = (statName) => {
    switch (statName) {
      case "hp":
        return "HP";
      case "attack":
        return "Attack";
      case "defense":
        return "Defense";
      case "special-attack":
        return "Sp. Atk";
      case "special-defense":
        return "Sp. Def";
      case "speed":
        return "Speed";
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className={`container-opacity`}
      >
        <figure
          className={`container-card-img position-relative my-4 text-center  container-${data.types?.[0]?.type?.name}`}
        >
          <img
            className="animation-up-down img-size"
            alt={data.name}
            title={data.name}
            src={GetImageById(data.id)}
          />
        </figure>
      </motion.div>
      <div className="container-card mb-4">
        <div>
          <div className="text-center">
            <p className="pokemon-number mb-0">
              # {data?.id?.toString()?.padStart(3, "0")}
            </p>
            <h2 className="pokemon-name limit-text my-0">{data?.name}</h2>
          </div>

          <div className="text-center d-flex justify-content-between aling-item-center">
            <p className="pokemon-number mb-0 me-4">Abilities:</p>
            {data &&
              data.abilities?.map((item, index) => (
                <ul key={index}>
                  <li className={"mt-1 text-white pokemon-number"}>
                    {item.ability.name}
                  </li>
                </ul>
              ))}
          </div>
          {data.stats?.map(({ stat, base_stat }) => (
            <StatsList>
              <li>
                <span className="text-white me-2">
                  {formatStatName(stat.name)}
                </span>
                <span className="text-white">{base_stat}</span>
                <ProgressBar>
                  <ProgressBarFill base_stat={base_stat}></ProgressBarFill>
                </ProgressBar>
              </li>
            </StatsList>
          ))}
        </div>
        <div className="w-100  d-flex justify-content-between">
          {data &&
            data?.types?.map(({ type, slot }) => (
              <div
                key={slot}
                className={` ${type?.name} type-item ${
                  data.types.length === 1 && "w-100"
                }`}
              >
                <p className="mb-0 text-uppercase">{type?.name}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
