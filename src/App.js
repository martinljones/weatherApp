import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import WeatherCard from "./containers/WeatherCard/WeatherCard";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <WeatherCard/>
        </Layout>
      </div>
    );
  }
}

export default App;
