import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = ({ apigetPokemon }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = useForm();

  const onSubmit = ({ id_poke, name_poke }) => {
    apigetPokemon(id_poke ? id_poke.toLowerCase() : name_poke.toLowerCase());
  };

  // useEffect(() => {
  //   var valuesa = getValues();
  //   if (valuesa.id_poke !== "" || valuesa.name_poke !== "") {
  //     console.log("ya no es vacio");
  //   } else {
  //     console.log("es vacio");
  //   }
  // }, []);

  return (
    <form className="mt-5 pt-5 form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-lg-12 col-xs-6 col-md-12 w-100">
        <input
          {...register("id_poke", { required: false })}
          type="number"
          className="form-control"
          placeholder="id"
          disabled={watch("name_poke")}
        />
      </div>
      <div className="col-lg-12 col-xs-6 col-md-12 mt-4 w-100">
        <input
          {...register("name_poke", { required: false })}
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
          // disabled={}
        >
          Consultar
        </button>
      </div>
    </form>
  );
};

export default Form;
