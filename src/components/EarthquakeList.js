import React, { Component } from 'react';
import moment from 'moment';

export default class EarthquakeList extends Component {
    render() {
        let quakes;
        quakes = this.props.quakes.map((quake, index) => (
            <div className="col-sm-6" key={index}>
                <div className="card" >
                    <div className="card-block">
                        <h4 className="card-title">{quake.properties.place}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Magnitude: {quake.properties.mag}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Time: {moment(quake.properties.time).format('llll')}</h6>
                        <p className="card-text">Coordinates: {quake.geometry.coordinates}</p>
                        <a href={quake.properties.url} className="card-link">USGS Event Link</a>
                    </div>
                </div>
            </div>
        ));

        return (
            <div className="quake-list">
                <div className="row">
                    {quakes}
                </div>
            </div>
        );
    }
}