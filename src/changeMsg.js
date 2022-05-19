import React from 'react'
import styled from 'styled-components';

const Text = styled.h1`
  margin-top: 27vh;
  color: #181818;
`



export default class Change extends React.Component{


state={
  msg: "Cronômetro"
}

changeColor = () =>{
  setInterval(() =>{
    document.body.style.backgroundColor = '#181818'
  }, 100)
}

componentDidMount(){
  document.title = "Atividade - VnW"
}
  render(){
    return(
      <>
      <Text>{this.state.msg}</Text>
      </>
    )
  }
}