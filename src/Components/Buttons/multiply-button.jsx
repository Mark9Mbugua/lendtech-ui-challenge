import React from "react";
import { CustomButton } from "./button.styles";

const MutliplyButton = ({ handleMultiplication, counter }) => {
  return (
    <>
      <CustomButton counter={counter} onClick={() => handleMultiplication()}>
        Multiply
      </CustomButton>
    </>
  );
};

export default MutliplyButton;
