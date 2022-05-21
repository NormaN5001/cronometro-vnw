import React from 'react'
import Change from './changeMsg'

import { createGlobalStyle } from "styled-components"
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    background-color: cyan;
  }
`
const Main = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`
const Number = styled.h1`
  margin-top: 30px;
`
const Buttons = styled.div`
  margin-top: 30px;
  button{
    color: white;
    font-size: 1.8vh;
    transition: 0.5s;
    margin-left: 20px;
    border-style: none;
    border-radius: 10px;
    background-color: #292929;
    width: 80px;
    height: 40px;
    &:hover{
      cursor: pointer;
      background-color: #181818;
      transform: scale(1.2);
      font-size: 2vh;
    }
  }
`



export default class App extends React.Component{

state={
  num: 0
}


add = () =>{
  const Intervalo = setInterval(() =>{
    this.setState({num: this.state.num < 100 ? this.state.num +1 : this.state.num})
  }, 1000)

  this.stop = ()=>{
    clearInterval(Intervalo)
  }

  this.restart = ()=>{
    this.setState({num: 0})
    clearInterval(Intervalo)
  }
}



  render(){
    return(
      <Main>
        <GlobalStyle/>
        <Change/>
        <Number>{this.state.num}s</Number>
        <Buttons>
          <button onClick={this.add}>Iniciar</button>
          <button onClick={this.stop}>Parar</button>
          <button onClick={this.restart}>Zerar</button>
        </Buttons>
      </Main>
    )
  }
}