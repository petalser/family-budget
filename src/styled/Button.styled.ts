import { styled } from "styled-components";

export const ButtonSTL = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  background-color: white;

  input {
    border: 1px solid white;
    border-radius: 3rem;
    background-color: red;
    color: white;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 0.5rem 1rem;
    margin: 0 .5rem;
    min-width: 3rem;
  }

  input:hover {
    border-color: red;
    color: red;
    background-color: white;
    transition: ease .2s;
  }
`;
