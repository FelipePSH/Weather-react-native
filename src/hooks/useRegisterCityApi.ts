import { APIRoutes } from "../api/api-routes.enum";
import axios from "axios";

export function useRegisterCityApi(cityId: string): Promise<any>{
  const url = APIRoutes.BASE_URL + APIRoutes.REGISTER_CITY_TO_TOKEN.replace(
    ':token',
    APIRoutes.TOKEN
  )
  const data = new URLSearchParams();
  data.append('localeId[]', cityId.toString());
  return axios.put(url, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(response => {
    return response.data
  }).catch(error => {
    throw error;
  });
}