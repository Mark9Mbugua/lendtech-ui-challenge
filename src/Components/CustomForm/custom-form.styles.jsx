import styled from "styled-components";

export const MyCustomForm = styled.form`
  display: flex;
  box-shadow: 0px 8px 10px 0px #e6e0e0;
  height: 2.5rem;

  input {
    outline: none;
  }

  button {
    color: #fff;
    background: #1920e5;
    
    &:hover {
      cursor: pointer;
    }
  }
`;
