import React from "react";
import "./form-input.styles.scss";

import { PeiliConsumer } from "../../context/context";

const FormInput = ({ ...otherProps }) => (
  <PeiliConsumer>
    {(value: any) => {
      const { handleChange } = value;
      return <input className="form-input" {...otherProps} />;
    }}
  </PeiliConsumer>
);

export default FormInput;
