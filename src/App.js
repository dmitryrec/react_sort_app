import React, { Component } from 'react';

export default class App extends Component {

  state = {
    planets: []
  }

  componentDidMount(){

      fetch(`https://swapi.co/api/planets/`)
      .then(res => {
        return res.json()
      })
      .then(({results}) => {
        console.log(results)
        this.setState({
            planets: results
        })
        console.log(this.state.planets)

      })
      
    }

  render() {
    return (
     <div>
       <h1>Planets</h1>
       <div>
         <img src="" alt=""/>
         <p>title</p>
         <p>diameter:</p>
         <a href="" target="_blank">link</a>
         
       </div>
     </div>
    );
  }
}




