import { ButtonSTL } from "../styled/Button.styled";

const Button = () => {
  return (
    <ButtonSTL>
      <input type="button" value={"+"} />
      <input type="button" value={"-"} />
      <input type="button" value={"REPORT"} />
    </ButtonSTL>
  );
};

export default Button;
