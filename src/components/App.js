import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';
import EarthquakeInfo from './EarthquakeInfo';
import EarthquakeList from './EarthquakeList';

class App extends Component {
  constructor(params) {
    super(params);
    this.state = {
      quakes: []
    }
  }

  componentWillMount() {
    let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";
    axios.get(url)
      .then((response) => {
        let quakes = response.data.features;
        console.log('quakes: ', quakes);
        this.setState({ quakes });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">Earthquakes!</div>
        </div>
        <EarthquakeInfo />
        <EarthquakeList quakes={this.state.quakes} />
      </div >
    );
  }
}

export default App;
