import React, {Fragment} from 'react';
import Header from './components/Header';
import SearchFoodDishes from './components/SearchFoodDishes';
import Footer from './components/Footer';

const App = () =>  (
  <Fragment>

    <Header />
    <Footer />

  </Fragment>
); 

//pseudónimo en el navegadr 
App.displayName = 'App';

export default App;
