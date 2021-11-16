import React from "react";
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

const Textarea = styled.textarea`
  margin-right: 4rem;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid grey;
  border-radius: 3px;
  outline: none;
  resize: none;
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

const InputField = ({
  placeholder,
  style,
  type,
  onChange,
  value,
  required,
}) => {
  return (
    <>
      {type === "textarea" ? (
        <Textarea
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={onChange}
          style={style}
          required={required}
        />
      ) : (
        <Input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          style={style}
          required={required}
        />
      )}
    </>
  );
};

export default InputField;
