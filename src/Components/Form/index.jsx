import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ apigetPokemon }) => {
  const [lastSearch, setLastSearch] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = ({ id_poke, name_poke }) => {
    const value = id_poke ? id_poke.toLowerCase() : name_poke.toLowerCase();
    if (lastSearch !== value) {
      setLastSearch(value);
      apigetPokemon(value);
    }
  };

  return (
    <form className="form mb-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-lg-12 col-xs-6 col-md-12 input-div">
        <input
          {...register("id_poke", {
            required: false,
          })}
          type="number"
          className="form-control"
          placeholder="id"
          disabled={watch("name_poke")}
        />
      </div>
      <div className="col-lg-12 col-xs-6 col-md-12 mt-4 input-div">
        <input
          {...register("name_poke", {
            required: false,
          })}
          type="text"
          className="form-control"
          placeholder="Nombre"
          disabled={watch("id_poke")}
        />
      </div>
      <div className="d-flex justify-content-end content">
        <button className="btn text-white  mt-5 text-center" type="submit">
          Consultar
        </button>
      </div>
    </form>
  );
};

export default Form;
