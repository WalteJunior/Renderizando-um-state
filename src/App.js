import React, { Component } from "react";
class estado extends Component{
  state = {
    nome:'Walter',
    idade: 21,
    comida:'lasanha'
  }
  render(){
    return(
      <div>
      <h1>Meu nome é {this.state.nome}</h1>
      <h2>Tenho {this.state.idade} anos</h2>
      <h3>Eu amo lasanha {this.state.comida}</h3>
      <ul>
        <li>Industry baby - Lil Nas x</li>
        <li>Eleven - Khalid feat. Summer Walker</li>
        <li>Need to know - Doja cat</li>
      </ul>
      <importScripts></importScripts>
      </div>
    )
  }
}

export default estado;