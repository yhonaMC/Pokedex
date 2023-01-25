import React from "react";
import { GetImageById } from "../../Funtion/Index";
import { motion } from "framer-motion";
import "./cards.style.css";
import Abilities from "../Abilities";
import Types from "../Types";
import { HashLoader } from "react-spinners";

const Cards = ({ data, loading }) => {
  return (
    <>
      {loading && (
        <div className={"loader"}>
          <HashLoader color="#ff3936" size={200} />
        </div>
      )}
      {!loading && (
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
              <Abilities data={data} />
            </div>
            <div className="w-100  d-flex justify-content-between">
              <Types data={data} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cards;
