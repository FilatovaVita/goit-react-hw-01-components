import PropTypes from 'prop-types';
import { Table, Thead, Tbody, Trbody } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Thead>Type</Thead>
          <Thead>Amount</Thead>
          <Thead>Currency</Thead>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Trbody key={item.id}>
            <Tbody>{item.type}</Tbody>
            <Tbody>{item.amount}</Tbody>
            <Tbody>{item.currency}</Tbody>
          </Trbody>
        ))}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
