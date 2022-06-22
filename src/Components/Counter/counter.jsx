import React, { useEffect, useState } from "react";
import axios from "axios";

import MutliplyButton from "../Buttons/multiply-button";
import SquareButton from "../Buttons/square-button";
import CustomForm from "../CustomForm/custom-form";
// import "../../API/db.json";
import styles from "./counter.module.scss";

const Counter = () => {
  const [counter, setCounter] = useState("Blow");
  const [formCounter, setFormCounter] = useState(null);
  const [isEven, setIsEven] = useState(false);
  const [data, setData] = useState(false);

  //No.2: Find out if counter value is even using an open source API
  const isCounterEven = async () => {
    if (counter % 1 !== 0 || counter == "Infinity") {
      setIsEven(false);
    } else {
      const { data } = await axios.get(
        `https://api.isevenapi.xyz/api/iseven/${counter}/`
      );
      setIsEven(data.iseven);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof counter);
    if (isNaN(formCounter) === true && formCounter !== null) {
      alert("Kindly input a number");
      setCounter(null);
      setFormCounter("");
    } else {
      setCounter(formCounter);
    }
  };

  const newCounterObject = {
    name: "Counter",
    value: counter,
  };

  //No.3: to change the Counter Value to a random Value.....
  const addRandomCounterValue = async () => {
    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        newCounterObject
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
    console.log(data);
  };

  useEffect(() => {
    isCounterEven();
    addRandomCounterValue();
  }, [counter]);

  //No.5: press the enter button after to submit the form input vale
  useEffect(() => {
    const keyDownHandler = (e) => {
      console.log("User pressed: ", e.key);

      if (e.key === "Enter") {
        e.preventDefault();

        // 👇️ call submit function here
        handleSubmit(e);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    //Clean up fn when component unmounts
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [formCounter]);

  //No.1(a) First Button (Multiply) must multiply the value (2^2, 2^3, etc.)
  const handleMultiplication = () => {
    setCounter(Math.pow(counter, counter));
  };

  //No.1(b) Second Button (Square) must square the value (sqrt(2^3) for example)
  const handleSquareRoot = () => {
    setCounter(Math.sqrt(counter));
  };

  return (
    // No.4: Hide & disable the Buttons, if the Value is not a Number......
    <>
      <div className={styles.counterContainer}>
        {isNaN(counter) === false && counter !== null ? (
          <div className={styles.buttonsContainer}>
            <MutliplyButton
              handleMultiplication={handleMultiplication}
              counter={counter}
              formCounter={formCounter}
              setCounter={setCounter}
              handleSubmit={handleSubmit}
              setFormCounter={setFormCounter}
            />
            <div className={styles.counterDetails}>
              <h3>Counter Value: {counter}</h3>
              <br />
              <h5>Is counter value an even number? </h5>
              {isEven ? <h4>Yes</h4> : <h4>No</h4>}
              <br />
            </div>
            <SquareButton
              handleSquareRoot={handleSquareRoot}
              counter={counter}
              setCounter={setCounter}
              handleSubmit={handleSubmit}
              formCounter={formCounter}
              setFormCounter={setFormCounter}
            />
          </div>
        ) : (
          <CustomForm
            handleSubmit={handleSubmit}
            setFormCounter={setFormCounter}
            formCounter={formCounter}
            counter={counter}
          />
        )}
      </div>
    </>
  );
};

export default Counter;
