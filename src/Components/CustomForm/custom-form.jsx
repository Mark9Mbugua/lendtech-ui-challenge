import React from "react";
import { MyCustomForm, CustomFormContainer } from "./custom-form.styles";

const CustomForm = ({ formCounter, setFormCounter, handleSubmit }) => {
  return (
    <CustomFormContainer>
      <div>
        <p>Initial form / counter value = 2.</p>
        <br />
        <p>You may also choose to enter your own values.</p>
      </div>
      <MyCustomForm onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="formCounter"
          id="formCounter"
          placeholder="Enter a number...preferably 2"
          value={formCounter}
          onChange={(e) => setFormCounter(e.target.value)}
        />
        <button type="submit">Submit</button>
      </MyCustomForm>
    </CustomFormContainer>
  );
};

export default CustomForm;
