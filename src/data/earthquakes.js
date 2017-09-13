import axios from 'axios';

let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";

axios.get(url)
    .then(function (response) {
        const earthquakes = response.data;
        console.log('earthquakes: ', earthquakes);
    });

export default earthquakes;