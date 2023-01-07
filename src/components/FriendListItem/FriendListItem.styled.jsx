import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  gap: 30px;
  border: 1px solid darkgray;
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

export const Name = styled.p`
  color: black;
  font-size: 24px;
  margin: 5px;
  font-weight: bolder;
`;

export const Status = styled.span`
  display: block;
  padding: 10px;
  border: 1px solid black;
  color: forestgreen;
  border-radius: 50%;
  background-color: black;

  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'forestgreen';
      case false:
        return 'red';
      default:
        return 'white';
    }
  }};
`;
