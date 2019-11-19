import React, { InputHTMLAttributes } from 'react';
import './form-input.styles.scss';

import { PeiliConsumer } from '../../context/context';

const FormInput = ({ ...otherProps }: InputHTMLAttributes<HTMLInputElement>) => (
  <PeiliConsumer>
    {(value: any) => {
      const { handleChange } = value;
      return <input className="form-input" {...otherProps} />;
    }}
  </PeiliConsumer>
);

export default FormInput;
