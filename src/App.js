import React, { Component } from 'react';

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

      })

  }

  render() {

    const { planets, loading } = this.state
    if(loading){
      return <div className="loading">Loading...</div>
    }{
      return (
        <div className="container">
          <h1 className="header">Star Wars planets:</h1>
          <div className="main">
            {planets.map(planet => (
              <div key={planet.url} className="planet">
                <h3>{planet.name}</h3>
                <span>diameter: {planet.diameter}</span>
  
              </div>
  
            ))}
  
            {/* <div>
           <img src="" alt=""/>
           <p>title</p>
           <p>diameter:</p>
           <a href="" target="_blank">link</a>
           
         </div> */}
          </div>
        </div>
  
      );
    }

    
  }
}




