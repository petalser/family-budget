import { styled } from "styled-components";
import Button from "../components/Button"
import vars from "./variables";

const ButtonSTL = styled(Button)`
  margin-top: ${vars.sizes.gap};
  display: flex;
  gap: ${vars.sizes.gap};
  flex-direction: column;
  justify-content: center;

  button {
    border: 4px solid ${vars.colors.borderDefault}  ;
    border-radius: ${vars.sizes.borderRadSmall};
    height: ${vars.sizes.buttonHeight};
    background-color: ${vars.colors.bgDefault};
    color: ${vars.colors.textDefault};
    font-size: ${vars.sizes.textDefault};
    font-weight: 300;
    padding-inline: 1rem;
    margin: 0 .5rem;
    min-width: 3rem;
  }

 

  .icon {
    font-size: 1.1rem;
    display: none;
    scale: .8;  
  }

@media only screen and (min-width: 700px) {
  flex-direction: row;
  gap: 0;
  button span {
    display: none;
  }
  button .icon {
    display: block;
}
 button:hover {
    color: ${vars.colors.bgDefault};
    background-color: ${vars.colors.textDefault};
    transition: ease .2s;
    cursor: pointer;

    * {
      color: ${vars.colors.bgDefault};
    }
  }




}
`;

export default ButtonSTL