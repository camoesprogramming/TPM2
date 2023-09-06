import { styled } from "styled-components"

export default function DataRow() {
  return (
    <ListItem>
      <div>
        <p>mês/ano</p>
        <p>R$ valor</p>
      </div>
      <p>porcentagem %</p>
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
