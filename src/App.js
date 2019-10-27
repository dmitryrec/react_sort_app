import React, { Component } from 'react';
import Planet from './Planet';

export default class App extends Component {

  state = {
    planets: [],
    loading: false,
    enableAutoRefresh: false
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
    this.setState((state) => ({
      enableAutoRefresh: !state.enableAutoRefresh
    }), () => {
      this.state.enableAutoRefresh ? this.refresh = setInterval(this.getPlanets, 3000) : clearInterval(this.refresh) 
    })
  }

  render() {
    const { planets, loading, enableAutoRefresh } = this.state;
    const sortedByDiameter = planets.sort((a, b) => a.diameter - b.diameter);

    if(loading){
      return <div className="loading">Loading...</div>
    }
      return (
        <div className="container">
          <h1 className="header">Star Wars planets:</h1>
          <button onClick={this.autoRefresh}>{enableAutoRefresh ? 'stop' : 'start'} autorefresh</button>
          <div className="main">
            {sortedByDiameter.map(planet => <Planet {...planet} key={planet.url}/>)}
          </div>
        </div>
      );
  }
}




