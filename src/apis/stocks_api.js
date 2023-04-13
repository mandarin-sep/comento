import axios from "axios";
import { HOST } from "./config";

export async function getResult(keywordIdx, setResult) {
  try {
    const res = await axios.get(`${HOST}/stock/news?idx=${keywordIdx}`);

    setResult(res.data);
  } catch (err) {
    return null;
  }
}
