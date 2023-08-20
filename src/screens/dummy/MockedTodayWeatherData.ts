import TodayWeatherData from "../models/TodayWeatherData";

class MockedTodayWeatherData implements TodayWeatherData {
  id: number = 3477;
  name: string = "São Paulo";
  state: string = "SP";
  country: string = "BR";
  data: {
    temperature: number;
    wind_direction: string;
    wind_velocity: number;
    humidity: number;
    condition: string;
    pressure: number;
    icon: string;
    sensation: number;
    date: string;
  } = {
    temperature: 25,
    wind_direction: "NW",
    wind_velocity: 22,
    humidity: 43,
    condition: "Poucas nuvens",
    pressure: 1008,
    icon: "2n",
    sensation: 27,
    date: "2017-10-01 12:37:00",
  };
}

export default MockedTodayWeatherData;
