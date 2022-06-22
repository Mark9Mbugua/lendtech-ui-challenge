import React from "react";
import { MyCustomForm } from "./custom-form.styles";

const CustomForm = ({ formCounter, setFormCounter, handleSubmit }) => {
  return (
    <MyCustomForm onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="formCounter"
        id="formCounter"
        placeholder="Enter a number..."
        value={formCounter}
        onChange={(e) => setFormCounter(e.target.value)}
      />
      <button type="submit">Submit</button>
    </MyCustomForm>
  );
};

export default CustomForm;
