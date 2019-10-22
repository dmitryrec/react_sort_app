import React, { Component } from 'react';

export default class App extends Component {

  state = {
    planets: []
  }

  componentDidMount() {

    fetch(`https://swapi.co/api/planets/`)
      .then(res => {
        return res.json()
      })
      .then(({ results }) => {
        console.log(results)
        this.setState({
          planets: results
        })
        console.log(this.state.planets)

      })

  }

  render() {

    const { planets } = this.state

    return (
      <div className="container">
        <h1 className="header">Star Wars planets:</h1>
        <div className="main">
          {planets.map(planet => (
            <div key={planet.url} className="planet">
              <h3>name: {planet.name}</h3>
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




