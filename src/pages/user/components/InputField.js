import React from 'react'
import styled from "@emotion/styled";

const Input = styled.input`
  margin-right: 4rem;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid grey;
  border-radius: 3px;
  outline: none;
  &:focus {
    border: 1px solid black;
    transition: 250ms ease;
    color: black;
    &::-webkit-input-placeholder {
      transition: opacity 250ms ease;
      opacity: 0;
    }
    &::-moz-placeholder {
      transition: opacity 250ms ease;
      opacity: 0;
    }
    &:-ms-placeholder {
      transition: opacity 250ms ease;
      opacity: 0;
    }
  }
`;

const InputField = ({placeholder,style}) => {
    return (
        <Input placeholder={placeholder} style={style} />
    )
}

export default InputField
