
import PropTypes from 'prop-types';
import { Title, Container, List, ListItem } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Container>
    <Title>{title}</Title>
    <List>
      {stats.map(stat => (<ListItem stats={stats} key={stat.id}>
        <span className="label">
          {stat.label}
        </span>
        <span className="percentage">{stat.percentage}%</span>
      </ListItem>))}
    </List>
  </Container>)
}
Statistics.propTypes ={
  title: PropTypes.string,
  stat: PropTypes.shape({
    label: PropTypes.string,
  percentage: PropTypes.number}
  )}
