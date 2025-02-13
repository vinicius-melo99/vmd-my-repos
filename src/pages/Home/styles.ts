import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
      min-width: 25px;
      min-height: 25px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 30px;

  input {
    margin-right: 5px;
    flex: 1;
    border: 1px solid #ddd;
    padding: 10px 15px;
    border-radius: 4px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #0d2636;
  border: 0;
  border-radius: 2px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;

  &:hover {
    background-color: rgb(7, 20, 29);
  }
`;
