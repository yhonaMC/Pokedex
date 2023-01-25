import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ apigetPokemon }) => {
  const [valueId, setValueId] = useState("");
  const [valueName, setValueName] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = ({ id_poke, name_poke }) => {
    apigetPokemon(id_poke ? id_poke.toLowerCase() : name_poke.toLowerCase());
  };

  useEffect(() => {
    if (valueId !== "" || valueName !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [valueId, valueName]);

  return (
    <form className="form mb-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-lg-12 col-xs-6 col-md-12 input-div">
        <input
          {...register("id_poke", {
            required: false,
            onChange: (e) => setValueId(e.target.value),
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
            onChange: (e) => setValueName(e.target.value),
          })}
          type="text"
          className="form-control"
          placeholder="Nombre"
          disabled={watch("id_poke")}
        />
      </div>
      <div className="d-flex justify-content-end ">
        <button
          className="btn text-white w-50 mt-5 text-center"
          type="submit"
          disabled={isDisabled}
        >
          Consultar
        </button>
      </div>
    </form>
  );
};

export default Form;
