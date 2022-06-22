import React from "react";
import {
  CounterDetailsContainer,
  IsEvenContainer,
  IsEvenBoolean,
} from "./counter-details.styles";

const CounterDetails = ({ counter, isEven }) => {
  return (
    <CounterDetailsContainer>
      <h3>Counter Value: {counter}</h3>
      <br />
      <IsEvenContainer>
        <h4>Is counter value an even number? </h4>
        {isEven ? (
          <IsEvenBoolean isEven={isEven}>Yes</IsEvenBoolean>
        ) : (
          <IsEvenBoolean isEven={isEven}>No</IsEvenBoolean>
        )}
      </IsEvenContainer>

      <br />
    </CounterDetailsContainer>
  );
};

export default CounterDetails;
