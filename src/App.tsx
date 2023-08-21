import Button from "./components/Button";
import { GlobalStyle } from "./styled/Global";
import { Donut } from "./components/Donut";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import fetchData from "./API/fetch";
import { DataSet, init } from "./features/data";

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
      <Button />
      <Donut />
    </>
  );
}
export default App;
