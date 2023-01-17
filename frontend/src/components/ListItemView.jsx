import styled from 'styled-components';
import ListItem from './ListItem';

const ListItemView = () => {
  return (
    <ListItemBlock>
      <ListItem
        date={'1월 3일 (화) 7:00PM'}
        journeyStart={'성수 SPOT 01 외'}
        journeyEnd={'용산 HUB'}
        transit="1"></ListItem>
      <ListItem
        date={'1월 3일 (화) 7:00PM'}
        journeyStart={'성수 SPOT 01 외'}
        journeyEnd={'용산 HUB'}
        transit="1"></ListItem>
      <ListItem
        date={'1월 3일 (화) 7:00PM'}
        journeyStart={'성수 SPOT 01 외'}
        journeyEnd={'용산 HUB'}
        transit="1"></ListItem>
      <ListItem
        date={'1월 3일 (화) 7:00PM'}
        journeyStart={'성수 SPOT 01 외'}
        journeyEnd={'용산 HUB'}
        transit="1"></ListItem>
      <ListItem
        date={'1월 3일 (화) 7:00PM'}
        journeyStart={'성수 SPOT 01 외'}
        journeyEnd={'용산 HUB'}
        transit="1"></ListItem>
      <ListItem
        date={'1월 3일 (화) 7:00PM'}
        journeyStart={'성수 SPOT 01 외'}
        journeyEnd={'용산 HUB'}
        transit="1"></ListItem>
      <ListItem
        date={'1월 3일 (화) 7:00PM'}
        journeyStart={'성수 SPOT 01 외'}
        journeyEnd={'용산 HUB'}
        transit="1"></ListItem>
      <ListItem
        date={'1월 3일 (화) 7:00PM'}
        journeyStart={'성수 SPOT 01 외'}
        journeyEnd={'용산 HUB'}
        transit="1"></ListItem>
      <ListItem
        date={'1월 3일 (화) 7:00PM'}
        journeyStart={'성수 SPOT 01 외'}
        journeyEnd={'용산 HUB'}
        transit="1"></ListItem>
    </ListItemBlock>
  );
};

const ListItemBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ListItemView;
