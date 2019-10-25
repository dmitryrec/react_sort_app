import React, { Component } from 'react';
import Planet from './Planet';

export default class App extends Component {

  state = {
    planets: [],
    loading: false
  }

  componentDidMount() {
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
  }

  render() {
    const { planets, loading } = this.state;
    const sortedByDiameter = planets.sort((a, b) => b.diameter - a.diameter)

    if(loading){
      return <div className="loading">Loading...</div>
    }
      return (
        <div className="container">
          <h1 className="header">Star Wars planets:</h1>
          <div className="main">
            {sortedByDiameter.map(planet => <Planet {...planet} key={planet.url}/>)}
          </div>
        </div>
      );
  }
}




