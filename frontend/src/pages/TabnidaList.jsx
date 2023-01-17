import { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/NavBar';
import Header from '../components/Header';
import CircleButton from '../components/common/CircleButton';
import DestinationInput from '../components/DestinationInput';
import { useNavigate } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import ListItemView from '../components/ListItemView';

export default function TabnidaList() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const add = () => {
    setOpen(!open);
    navigate('/tabnida-add');
  };

  return (
    <>
      <Header title="탑니다" />
      <Container>
        <DestinationInput />
        <Centent>
          <ListItemView />
        </Centent>
      </Container>
      <Navbar>
        <CircleButton onClick={add} open={open}>
          <MdAdd />
        </CircleButton>
      </Navbar>
    </>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

const Centent = styled.div`
  width: 100%;
  display: flex;
  overflow: scroll;
  position: relative;
`;
