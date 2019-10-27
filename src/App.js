import React, { Component } from 'react';
import Planet from './Planet';

export default class App extends Component {

  state = {
    planets: [],
    loading: false,
    enableAutoRefresh: false,
    minDiameter: 4900
  }

  componentDidMount() {
   this.getPlanets()
  }
  
  getPlanets = () => {
    this.setState({
      loading: true
    })

    fetch(`https://swapi.co/api/planets/`)
      .then(res => {
        return res.json()
      })
      .then(({ results }) => {
        this.setState({
          planets: results,
          loading: false
        })
        console.log(this.state.planets)
      })
  };

  autoRefresh = () => {
    this.setState(({enableAutoRefresh}) => ({
      enableAutoRefresh: !enableAutoRefresh
    }), () => {
      this.state.enableAutoRefresh ? this.refresh = setInterval(this.getPlanets, 3000) : clearInterval(this.refresh) 
    })
  };

  updateMinDiameter = (e) => {
    this.setState({
      minDiameter: Number(e.target.value)
    })
  };

  getFilteredPlanets = (planets, minDiameter) => 
  planets
  .filter(planet => planet.diameter >= minDiameter)
  .sort((a, b) => a.diameter - b.diameter)

  render() {
    const { planets, loading, enableAutoRefresh, minDiameter } = this.state;
    const sortedByDiameter = this.getFilteredPlanets(planets, minDiameter)

    if(loading){
      return <div className="loading">Loading...</div>
    }
      return (
        <div className="container">
          <h1 className="header">Star Wars planets:</h1>
          <div onClick={this.autoRefresh} className="btn">{enableAutoRefresh ? 'stop' : 'start'} autorefresh</div>
          <div className="range">
            <input 
              type="range" 
              min={4900} 
              max={19721} 
              value={minDiameter} 
              className="inp"
              onChange={this.updateMinDiameter}
              />

          </div>
          <div className="minDiameter">minDiameter: {minDiameter}</div>

          <div className="main">
            {sortedByDiameter.map(planet => <Planet {...planet} key={planet.url}/>)}
          </div>
        </div>
      );
  }
}




