import styled from "styled-components";

interface ButtonStyleProps {
  primary?: boolean;
  danger?: boolean;
  secondary?: boolean;
}

export const Button = styled.button<ButtonStyleProps>`
  background: ${(props) =>
    (props.primary && '#3399ff') ||
    (props.danger && '#ff1a1a') ||
    (props.secondary && '#2eb82e') 
  };
  color: white;
  border: 2px solid black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export const ButtonContainer = styled.div`
  display: inline-block;
  text-align: end;
`;