import styled from 'styled-components';

export const NoRepo = styled.span`
  color: #616161;
  padding-top: 20px;
  position: relative;
  top: 10px;
`;

export const List = styled.ul`
  list-style-position: inside;
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    padding: 15px 0;
    justify-content: space-between;

    & + li {
      border-top: 1px solid #0d2636;
    }

    a {
      color: #0d2636;
      text-decoration: none;
    }
  }
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 10px;
`;
