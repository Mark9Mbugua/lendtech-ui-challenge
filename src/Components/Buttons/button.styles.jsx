import styled from "styled-components";

export const CustomButton = styled.button`
  width: 150px;
  height: 50px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 15px 20px;
  font-weight: normal;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  color: #fff;
  background: ${(props) =>
    // props.counter == "Infinity"
    //   ? "#ff0000"
    //   :
    props.counter % 1 === 0
      ? "#24c918"
      : props.counter % 1 !== 0
      ? "#9c00f6"
      : "#9b9b9b"};
  box-shadow: ${(props) =>
    // props.counter == "Infinity"
    //   ? "0 5px 15px #ff0000"
    //   :
    props.counter % 1 === 0
      ? "0 5px 15px #24c918"
      : props.counter % 1 !== 0
      ? "0 5px 15px #9c00f6"
      : "0 5px 15px #9b9b9b"};

  &:hover {
    cursor: pointer;
  }
`;

export const FormInput = styled.form`
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
