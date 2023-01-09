import styled from 'styled-components';
export default function Screen({ children }) {
  return (
    <>
      <Container>
        <ScreenBlock>{children}</ScreenBlock>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 800px) {
  }
`;

const ScreenBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: white;
  overflow: scroll;
  @media only screen and (min-width: 470px) {
    width: 470px;
  }
`;
