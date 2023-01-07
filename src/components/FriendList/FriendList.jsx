import PropTypes from 'prop-types';
import {FriendListItem} from '../FriendListItem/FriendListItem';
import {List, Container} from './FriendList.styled'

export const FriendList= ({ friends }) => {

  return (
    <List>
    {friends.map(friend => (<Container key={friend.id}>
      <FriendListItem
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline}/></Container>))}
  </List>)}
FriendList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool}))}

