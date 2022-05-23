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
componentDidMount(){
  document.title = "Atividade - VnW"
}
componentDidUpdate(){
  document.title = this.state.msg
}

  render(){
    return(
      <>
      <Text>{this.state.msg}</Text>
      </>
    )
  }
}