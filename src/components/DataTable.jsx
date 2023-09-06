import { styled } from "styled-components"
import DataRow from "./DataRow.jsx"

export default function DataTable({name, reports}) {
  
  function compareMonth(a,b) {
    return a.month - b.month;
  }
  
  reports.sort(compareMonth)
  

  function calculateFundPerformance(array) {
    return (array[array.length -1].value - array[0].value).toFixed(2);    
  }

  let fundPerformance = calculateFundPerformance(reports)
  let percentageFundPerformance;

  if (fundPerformance > 0) {
    percentageFundPerformance = `+${(Number(fundPerformance)/10).toFixed(2)}`
  } else {
    percentageFundPerformance = `${(Number(fundPerformance)/10).toFixed(2)}`
  }
  
  const implementedReports = [...reports];
  function implementation(array) {
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        array[i].percentage = 0.00
        array[i].color = "black"
      } else {
        const difference = (array[i].value) - (array[i-1].value);
        const percentage = (difference * 100)/array[i-1].value;
        array[i].percentage = percentage.toFixed(2);
        if (percentage > 0) {
          array[i].color = "green"
        } else {
          array[i].color = "red"
        }
      }
    }
  }
  implementation(implementedReports);
  
  return (
    <Container>
      <h2>{name}</h2>
      <h3>Rendimento do fundo: 
        <span style={fundPerformance > 0 ? {color: "green"} : {color : "red"}}> {fundPerformance} ({percentageFundPerformance}%)</span>
        </h3>
      <ul>
        {implementedReports.map(
          e => (
            <DataRow 
            key={e.id}
            month = {e.month}
            year = {e.year}
            value = {e.value}
            color = {e.color}
            percentage = {e.percentage}
            />
          )
        )}
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