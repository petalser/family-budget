import { TOKEN } from "./TOKEN";

const endpoint: string = `https://${TOKEN}.mockapi.io/endpoint`;

const fetchData = async (): Promise<string> => {
  console.log("runs");
  const data: Response = await fetch(endpoint);
  const result = await data.json();
  console.log(result);
  return result;
};

export default fetchData;
