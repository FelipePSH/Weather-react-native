export enum APIRoutes {
  BASE_URL = 'http://apiadvisor.climatempo.com.br',
  TOKEN = '91e3668bab7d284442e663999b8e9978',
  USER_LOCALE_BY_LATITUDE_AND_LONGITUDE =
   '/api/v1/locale/city?latitude=:userLat&longitude=:userLong&token=:token',
  FIFTEEN_DAYS_FORECAST =
   '/api/v2/forecast/geo/days/15?latitude=:userLat&longitude=:userLong&token=:token',
  CURRENT_WEATHER =
   '/api/v2/forecast/geo/days/15?latitude=:userLat&longitude=:userLong&token=:token',
}
