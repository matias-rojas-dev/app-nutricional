import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid';
import FoodDish from './FoodDish';
import NoResults from './NoResults';

const FoodDishes = ( {hits} ) => (
    <Fragment>
        {
            hits.length ? //if
                <div className="root">
                    <Grid container spacing={3} justify="center">
                        {
                            hits.map(hit => {
                                const { uri, label, image, calories, ingredients } = hit.recipe;
                                return (
                                    <FoodDish
                                        key = {uri}
                                        label = {label}
                                        image = {image}
                                        calories = {calories}
                                        ingredients = {ingredients}
                                    /> // envío de props a FoodDish
                                )
                            })
                        }
                    </Grid>
                </div>
            
            : //else
                <NoResults/>
        }   

    </Fragment>
);

FoodDishes.displayName = "FoodDishes"

export default FoodDishes;