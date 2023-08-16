import axios from "axios";
import { APIRoutes } from "./api-routes.enum";

const instance = axios.create({
    baseURL: APIRoutes.BASE_URL,
  });

export default instance;