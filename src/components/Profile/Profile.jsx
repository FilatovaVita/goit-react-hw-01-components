import PropTypes from 'prop-types';
import {
  Container,
  Image,
  Stat,
  Stats,
  Label,
  Quantity,
  Name,
  Discription,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Image src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Discription>@{tag}</Discription>
      <Discription>{location}</Discription>
      <Stats>
        <Stat>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Stat>
        <Stat>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Stat>
        <Stat>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Stat>
      </Stats>
    </Container>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
