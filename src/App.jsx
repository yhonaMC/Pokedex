import axios from "axios";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import Cards from "./Components/Cards";
import Form from "./Components/Form";
import Header from "./Components/Header";

function App() {
  const [dataApi, setdataApi] = useState([]);
  const [loading, setLoading] = useState(false);
  const APIGET = `https://pokeapi.co/api/v2/pokemon`;

  const apigetPokemon = useCallback(async (inputValue) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${APIGET}/${inputValue}`);
      setdataApi(data);
    } catch (e) {
      toast.error(`the pokemon ${inputValue} could not be found`);
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="d-flex justify-content-center aling-item-center row">
          {dataApi.length !== 0 && (
            <div className="col-lg-6 col-md-10 col-sm-12 col-xs-12">
              <Cards data={dataApi} loading={loading} />
            </div>
          )}
          <div className="col-lg-6 col-md-10 col-sm-12 col-xs-12 center-form">
            <Form apigetPokemon={apigetPokemon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
