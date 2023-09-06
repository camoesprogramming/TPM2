import { styled } from "styled-components"

export default function DataRow({month, year, value, color, percentage}) {
  
  
  return (
    <ListItem>
      <div>
        <p>{month >= 10 ? month : `0${month}`}/{year}</p>
        <p style={{color: color}}>R$ {value.toFixed(2)}</p>
      </div>
      <p style={{color: color}}>{percentage} %</p>
    </ListItem>
  )
}

const ListItem = styled.li`

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  margin-bottom: 10px;
  
  div {
    display: flex;
    
    p {
      margin-right: 30px;
    }
  }

`
