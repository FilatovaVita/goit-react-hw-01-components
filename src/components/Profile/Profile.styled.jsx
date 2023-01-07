import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  height: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;
export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: lightgray;
`;

export const Stat = styled.li`
  display: flex;
  gap: 10px;
  padding: 23px;
  border: 1px solid darkgray;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: lighter;
  font-family: Roboto;
  font-size: large;
`;

export const Quantity = styled.span`
  font-weight: bolder;
  color: black;
`;

export const Name = styled.p`
  color: black;
  font-size: 24px;
  margin: 5px;
  font-weight: bolder;
`;

export const Discription = styled.p`
  color: darkgray;
  margin: 5px;
  font-size: large;
`;
