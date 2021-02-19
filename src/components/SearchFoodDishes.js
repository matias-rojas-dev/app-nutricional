import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import AnyFoodDishes from "./AnyFoodDishes";
import PredefinedFoodDishes from "./PredefinedFoodDishes";
import FoodDishes from "./FoodDishes";
import { getApiUrl } from "./../constants";

const SearchFoodDishes = () => {
  const [hits, setHits] = useState();
        //inicializamos un campo, y luego ese mismo campo cambiaría y se setea
        //por el set. De esa forma, va mutando el valor de esta propiedad.
        // useState() sirve para inicializar una propiedad que sabes que cambiará
        //la información que esta tendrá dentro.
    
  const getData = (query) => { 
    query && fetch(getApiUrl(query))
        .then((data) => data.json())
        .then((res) => setHits(res.hits))
        .catch((err) => console.log(err));
  };

  return (
    <Fragment>
      <div className="root">
        <Grid container spacing={3} justify="center">
          <AnyFoodDishes getData={getData} /> {/*Para buscar data, podemos pasar una props y esta recibe la data recibida*/}

          <PredefinedFoodDishes getData={getData} setHits={setHits} /> {/*Una props con data y además un setHits para ir conociendo el contexto de los hits nuevos*/}

        </Grid>
      </div>
      {hits && <FoodDishes hits={hits} />}
    </Fragment>
  );
};

SearchFoodDishes.displayName = 'SearchFoodDishes';

export default SearchFoodDishes;