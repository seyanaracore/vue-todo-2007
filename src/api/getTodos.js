import Api from "../utils/Api";
import { API_URL, TODOS_FETCHING_COUNT } from "../utils/constants";

function getTodos(url = API_URL, limit = TODOS_FETCHING_COUNT) {
  return Api.get(`${url}?_limit=${limit}`);
}
export default getTodos;
