import PropTypes from 'prop-types';
import { Avatar, Name, Status, Item } from './FriendListItem.styled';
export const FriendListItem = ({ name, avatar, isOnline }) => {

  return (
    <Item>
    <Status isOnline={isOnline}>{isOnline}</Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>)}

FriendListItem.propTypes ={
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool}
