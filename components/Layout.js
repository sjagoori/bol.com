import styled from 'styled-components'

export default function Layout(props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  margin-left: 50%;
  transform: translateX(-50%);
  width: 70vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  border: 1px solid black; 
`;