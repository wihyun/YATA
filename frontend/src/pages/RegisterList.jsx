import styled from 'styled-components';
import Navbar from '../components/NavBar';
import ListItem from '../components/ListItem';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ListItemView from '../components/ListItemView';

export default function RegisterList() {
  const navigate = useNavigate();
  const go = () => {
    navigate('/register-checklist');
  };
  return (
    <>
      <Header title="요청 내역" />
      <Container>
        <ListItemView />
        <ListItem
          onClick={go}
          date={'1월 3일 (화) 7:00PM'}
          journeyStart={'서울'}
          journeyEnd={'부산'}
          transit="1"></ListItem>
        <ListItem date={'1월 4일 (수) 7:00PM'} journeyStart={'부산'} journeyEnd={'서울'} transit="1"></ListItem>
        <ListItem date={'1월 4일 (수) 7:00PM'} journeyStart={'부산'} journeyEnd={'서울'} transit="1"></ListItem>
        <ListItem date={'1월 4일 (수) 7:00PM'} journeyStart={'부산'} journeyEnd={'서울'} transit="1"></ListItem>
        <ListItem date={'1월 4일 (수) 7:00PM'} journeyStart={'부산'} journeyEnd={'서울'} transit="1"></ListItem>
        <ListItem date={'1월 4일 (수) 7:00PM'} journeyStart={'부산'} journeyEnd={'서울'} transit="1"></ListItem>
        <ListItem date={'1월 4일 (수) 7:00PM'} journeyStart={'부산'} journeyEnd={'서울'} transit="1"></ListItem>
        <ListItem date={'1월 4일 (수) 7:00PM'} journeyStart={'부산'} journeyEnd={'서울'} transit="1"></ListItem>
        <ListItem date={'1월 4일 (수) 7:00PM'} journeyStart={'부산'} journeyEnd={'서울'} transit="1"></ListItem>
        <ListItem date={'1월 4일 (수) 7:00PM'} journeyStart={'부산'} journeyEnd={'서울'} transit="1"></ListItem>
        <ListItem date={'1월 4일 (수) 7:00PM'} journeyStart={'부산'} journeyEnd={'서울'} transit="1"></ListItem>
        <ListItem date={'1월 4일 (수) 7:00PM'} journeyStart={'부산'} journeyEnd={'서울'} transit="1"></ListItem>
        <ListItem date={'1월 4일 (수) 7:00PM'} journeyStart={'부산'} journeyEnd={'서울'} transit="1"></ListItem>
      </Container>
      <Navbar />
    </>
  );
}

const Container = styled.div`
  overflow: scroll;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
