import styled from '@emotion/styled';

export const Container = styled.section`
  width: 320px;
  height: 160px;
  margin:  0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
background-color: snow`
export const Title = styled.h2`
  color: black;
  font-size: 24px;
  margin-bottom: 30px;
  font-weight: bolder`

export const List = styled.ul`
  display: flex;
  flex-direction: row;

  list-style: none;
  margin: 0;
  padding: 0;
  `

export const ListItem = styled.li`
  padding: 15px 15px;
display: flex;
flex-direction: column;
gap: 10px;
border: 1px solid lightgray;
  background-color: ${props => {
  for (let i=0; i< props.stats.length; i++){
    return  '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
  } }
  };
`

