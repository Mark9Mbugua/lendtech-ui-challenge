import styled from "styled-components";

//No.2: Colour change logic
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
  background: ${({ counter }) =>
    isNaN(counter) === true
      ? "#ff0000"
      : counter === ""
      ? "#ff0000"
      : counter % 1 === 0
      ? "#24c918"
      : counter % 1 !== 0
      ? "#9c00f6"
      : "#9b9b9b"};
  box-shadow: ${({ counter }) =>
    isNaN(counter) === true
      ? "0 5px 15px #ff0000"
      : counter === ""
      ? "0 5px 15px #ff0000"
      : counter % 1 === 0
      ? "0 5px 15px #24c918"
      : counter % 1 !== 0
      ? "0 5px 15px #9c00f6"
      : "0 5px 15px #9b9b9b"};

  &:hover {
    cursor: pointer;
  }
`;
