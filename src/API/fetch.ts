import { TOKEN } from "./TOKEN";
import axios from "axios";

const endpoint: string = `https://${TOKEN}.mockapi.io/endpoint`;

export type ItemType = {
  title: string,
  price: number,
  category: string,
  benefit: boolean,
  createdAt: string,
  id: number,
}

const fetchData = async (): Promise<ItemType[]>=> {
  try {
    const result =  await axios.get<ItemType[]>(endpoint);
    return result.data

  } catch {Error} {
    console.error(Error);
    return []
  } 
  }
  // const data: Response = await fetch(endpoint);
  // const result = await data.json();
  // console.log(result);
  // return result;
// };

export default fetchData;
