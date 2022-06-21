import styled from "styled-components";

export const MyCustomForm = styled.form`
  display: flex;
  box-shadow: 0px 8px 10px 0px #e6e0e0;
  height: 2.5rem;

  input {
    outline: none;
    min-width: 300px;
  }

  button {
    display: flex;
    align-items: center;
    color: #fff;
    background: #0f16ea;
    padding: 15px 25px;

    &:hover {
      cursor: pointer;
      background: #070c94;
    }
  }
`;
