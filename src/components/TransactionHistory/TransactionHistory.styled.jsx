import styled from '@emotion/styled';

export const Table = styled.table`
  border: 1px solid #eee;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 20px;
`;

export const Thead = styled.th`
  font-weight: bold;
  padding: 15px;
  background: lightseagreen;
  color: white;
  border: 1px solid #dddddd;
`;

export const Tbody = styled.td`
  padding: 5px 10px;
  border: 1px solid #eee;
  text-align: center;
`;

export const Trbody = styled.tr`
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
`;
