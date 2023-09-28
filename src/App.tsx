import Button from "./styled/Button.styled";
import Donut from "./styled/Donut.styled";
import { GlobalStyle } from "./styled/Global";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import fetchData from "./API/fetch";
import { DataSet, init } from "./features/data";
import Form from "./styled/Form.styled";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const result = await fetchData();
        dispatch(init(result));
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <div className="leftside">
        <Button />
        <Form labels={["name", "price"]} />
      </div>
      <div className="rightside">
        <Donut />
      </div>
    </>
  );
}
export default App;
