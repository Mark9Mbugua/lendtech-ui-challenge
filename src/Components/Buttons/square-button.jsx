import React from "react";
import { CustomButton } from "./button.styles";

const SquareButton = ({ handleSquareRoot, counter }) => {
  return (
    <>
      <CustomButton counter={counter} onClick={() => handleSquareRoot()}>
        Square
      </CustomButton>
    </>
  );
};

export default SquareButton;
