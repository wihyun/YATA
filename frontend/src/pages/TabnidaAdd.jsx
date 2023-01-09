import styled from 'styled-components';
import KakaoMap from '../components/KakaoMap';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

export default function TabnidaAdd() {
  return (
    <>
      <Container>
        <KakaoMap></KakaoMap>
        <DestinationForm>
          <Input label="출발지" />
          <Input label="도착지" />
          <Button>경유지 추가 +</Button>
          <Button>다음</Button>
        </DestinationForm>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DestinationForm = styled.div`
  background-color: white;
  width: 100%;
  height: 10rem;
`;
