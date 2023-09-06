import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Text>
        React Investments v1.0.1
      </Text>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background: yellow;
  height: 90px;
`

const Text = styled.h1`
  font-size: 32px;
  font-weight: bolder;
  text-align: center;
  padding-top: 30px;
  font-family: "Roboto";
`
