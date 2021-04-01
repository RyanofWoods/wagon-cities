import React from 'react';
import CityList from '../containers/city_list';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <div className="active-city" />
    </div>
  );
};

export default App;
