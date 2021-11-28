import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 300px;
  height: 100px;

  margin: 1rem;
  padding: 1rem;

  color: white;
  font-family: sans-serif;
  font-weight: 700;

  background-color: #e1df;

  border-radius: 1rem;
  border: 0px;
`;

const Button = ({ text }) => {
  return (
    <StyledButton type="button">
      <h2>{text}</h2>
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
