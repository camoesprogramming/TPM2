import { styled } from "styled-components"
import DataRow from "./DataRow.jsx"

export default function DataTable({name, id, reports}) {
  console.log(reports)
  
  return (
    <Container>
      <h2>{name}</h2>
      <h3>Rendimento do fundo:</h3>
      <ul>
        <DataRow  />
      </ul>
    </Container>
  )
}

const Container = styled.div`
  width: 90%;
  margin: auto;
  border: 1px solid black;
  margin-top: 20px;
  margin-bottom: 10px;
  

  h2 {
    text-align: center;
    padding-top: 10px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto';
  }

  h3 {
    text-align: center;
    padding-top: 10px;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Roboto';
  }

  ul {
    width: 95%;
    margin: auto;
    margin-top: 20px;
  }

  
  
`