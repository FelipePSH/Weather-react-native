import { APIRoutes } from "./api-routes.enum";

export default function getUserLocale (url: string){
  return url.replace(
    ':token',
    `${APIRoutes.TOKEN}`,
  );
}